const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const dbName = 'under-armour';
var tableName = 'reviews';

var options = {
  useNewUrlParser: true,
  recordQueryStats: true
};

const unique = {
  user: 1,
};

var client = new MongoClient(uri, options);
var clearDatabase = function(callback) {
  client.connect((err, db)=> {
    db.db(dbName).collection(tableName).deleteMany( (err, resp)=> {
      if (callback) {
        callback(resp);
      }
      console.log('collection cleared');
    });
  });
};

var readCollection = (id, callback)=> {
  const query = {pid: id};
  console.log(query)
  const sortby = {timestamp: -1};
  client.connect((err, db)=> {
    console.log('Connected successfully to server');

    db.db(dbName).collection(tableName).find(query).toArray((err, dbDocs)=> {
      console.log(dbDocs)
      if (err) {
        callback(true);
      } else {
        callback(err, dbDocs, client);
      }
    });
  });
};

var writeCollection_Array = (arrayOfObjects, id, callback)=> {
  client.connect(function(err, db) {
    const collection = db.db(dbName).collection(tableName);
    collection.createIndex(unique, {unique: true});

    collection.insertMany( arrayOfObjects, (err, promise)=> {
      if (err) {
        /* errror */
      } else if (callback) {
        callback(err, promise, client);
      }

    });
  });
};
var writeOnceToCollection = (obj, collectionName, callback)=> {
  client.connect(function(err, db) {
    db.db(dbName).collection(collectionName).createIndex(unique, {unique: true});

    db.db(dbName).collection(collectionName).insertOne( obj, (err, promise)=> {
      if ( err ) {
        callback(err, client);
      } else if (callback) {
        callback(err, client);
      }
    });
  });
};

var sortCollection = (list)=> {
  return list.sort((a, b)=> {
    return b.timestamp - a.timestamp;
  });
};

var avgStatsCollection = (list) => {
  var avg = {
    siz: 0,
    performance: 0,
    comfort: 0,
    stars: 0,
    histoStars: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
  };

  var length = list.length;

  for (var obj of list ) {
    avg.size += !parseFloat (obj.sizePurchased) ? 0 : parseFloat(obj.sizePurchased);
    avg.performance += !parseFloat (obj.performanceRating) ? 0 : parseFloat( obj.performanceRating);
    avg.comfort += !parseFloat (obj.comfortRating) ? 0 : parseFloat (obj.comfortRating);
    if (!((obj.stars) === NaN) && (obj.stars)) {
      avg.histoStars[obj.stars] += +( parseInt(obj.stars) !== 0);
    }
  }

  avg.size = avg.size / length;
  avg.performance = avg.performance / length;
  avg.comfort = avg.comfort / length;

  for (var key in avg.histoStars ) {
    avg.stars += avg.histoStars[key];
    avg.histoStars[key] += Math.round (avg.histoStars[key] / length);
  }

  avg.stars = this.stars > 5 ? 5 : this.stars; //Ceiling rating to always have a star on the page :)
  return avg;
};

var updateCollection = (query, data, callback)=> {
  var set = {
    $set: data
  };
  client.connect ((err, db)=>{
    db.db(dbName).collection(tableName).update(query, set, (err)=> {
      if (err) {
        callback(true, client);
      } else {
        callback(null, client);
      }
    });
  });
};



exports.accessHelpers = {
  readCollection,
  writeCollection_Array,
  clearDatabase,
  writeOnceToCollection,
  sortCollection,
  updateCollection,
  avgStatsCollection
};

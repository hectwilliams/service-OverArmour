const MongoClient = require('mongodb').MongoClient;

// const personal = require('../config');
// var uri = `mongodb+srv://hectwilliams:${personal.passwordMongodb}@cluster0-e5veh.mongodb.net/test?retryWrites=true`

const uri = 'mongodb://localhost:27017';

const dbName = 'under-armour';
var tableName = 'reviews';



const unique = {
  user: 1,
};

const client = new MongoClient(uri, { useNewUrlParser: true });
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
  console.log(id)
  var query = [ {pid: {$eq: parseInt(id)}}, {pid: {$eq: String(id)}} ];
  client.connect((err, db)=> {
    const collection = db.db(dbName).collection(tableName);
    collection.find( {$or: query}).toArray((err, dbDocs)=> {
      if (err) {
        console.log(err, ' error reading')
        callback(true);
      } else {
        console.log('read successful');
        callback(err, dbDocs);
      }
    });
  });
};

var writeCollection_Array = (arrayOfObjects, id, callback)=> {
  client.connect(function(err, db) {
    const collection = db.db(dbName).collection(tableName);
    collection.insertMany(arrayOfObjects);
  });
};
var writeOnceToCollection = (obj, callback)=> {
  client.connect(function(err, db) {
    const collection = db.db(dbName).collection(tableName);
    collection.createIndex(unique, {unique: true});
    collection.insertOne( obj, (err)=> {
      if ( err ) {
        console.log(err)
        callback(err);
      } else if (callback) {
        callback(err);
      }
    });
  });
};

var sortCollection = (list)=> {
  return list.sort((a, b)=> {
    return b.timestamp - a.timestamp;
  });
};

var avgStatsCollection = (list, callback) => {
  var avg = {
    size: 0,
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

  var outcomes = 0;
  var maxFound  = [0, 0]

  for (var obj of list ) {
    if (!((obj.stars) === NaN) && (obj.stars)) {
      avg.histoStars[obj.stars] += +( parseInt(obj.stars) !== 0);
      outcomes++;
    }
  }
  for (var key in avg.histoStars ) {
    avg.histoStars[key] = Math.round( (avg.histoStars[key]/outcomes)*100 ) ;
    if (avg.histoStars[key]  >  maxFound[1]) {
      maxFound = [key, avg.histoStars[key]];
    }
    avg.stars = maxFound[0]; // update with largest average
  }

  avgHelper((err, data)=>{

    if(!err) {
      avg.performance = Math.round(data.Performance);
      avg.size = Math.round(data.Size);
      avg.stars = Math.round(data.Stars);
      avg.comfort = Math.round(data.Comfort);
      callback(avg);
    }else {
      callback(avg);
    }
  } );


  // return avg;
};


var avgHelper = (callback) => {
  const param = [
    {
      $group:
        { _id: null,
          Size: { $avg: "$sizeRating" },
          Performance: { $avg: "$performanceRating" },
          Comfort: { $avg: "$comfortRating" },
          Stars: { $avg: "$stars" }

        }
    }
  ]

  client.connect(function(err, db) {
    const collection = db.db(dbName).collection(tableName);
    collection.aggregate(param, (err1, promise)=>{

      promise.toArray( (err2, data)=>{
        if (err1||err2) {
          callback(true, {Size:0, Performance: 0, Comfort: 0});
        } else {
          callback(null,data[0]);
        }
      });
    })
  })
}
var updateCollection = (query, data, callback)=> {
  var set = {
    $set: data
  };
  client.connect ((err, db)=>{
    db.db(dbName).collection(tableName).update(query, set, (err)=> {
      if (err) {
        callback(true);
      } else {
        callback(null);
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
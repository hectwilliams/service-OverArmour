const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const dbName = 'reviews';
var tableName = 'pid3020612-405'; //product#

var options = {
   useNewUrlParser: true,
  //  serializeFunctions: true,
   recordQueryStats: true
   };
var client = new MongoClient(uri,options);

var clearDatabase = function(callback) {
  client.connect((err, db)=> {
    db.db('reviews').collection(tableName).deleteMany( (err,resp)=> {
      if(callback) {
        callback(resp);
      }
      console.log('collection cleared');
    });
  });
  // client.close();
};

var readCollection = (callback)=> {
  client.connect((err,db)=> {
    console.log('Connected successfully to server');
    db.db(dbName).collection(tableName).find().toArray((err, dbDocs)=> {
      callback(err, dbDocs,client);
    });
  });
  // client.close();
};

var writeCollection = (obj, collectionName ,callback)=> {
  client.connect(function(err, db) {
    var db = db.db(dbName);
    var collection = db.collection(tableName);
    collection.insertMany( obj, (err, promise)=> {
      if (callback) {
        callback(err, promise, client);
        // client.close();
      }
    });
  });
};
var writeOnceToCollection = (obj, collectionName ,callback)=> {
  client.connect(function(err,db) {
    db.db(dbName).collection(collectionName).insertOne( obj, (err, promise)=> {
      if( err ) {
        console.log('write rror')
        console.log(err)
      } else {
        if (callback) {
          callback(err,promise,client);
        }
      }
    });
  });
};

var sortCollection = (list)=> {
  return list.sort((a,b)=> {
   return b.timestamp - a.timestamp;
  });
};


exports.accessHelpers = {
  readCollection,
  writeCollection,
  clearDatabase,
  writeOnceToCollection,
  sortCollection
};

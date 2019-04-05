const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const dbName = 'reviews';
var tableName = 'pid3020612-405'; //product#
const client = new MongoClient(uri, { useNewUrlParser: true });

var clearDatabase = function(callback) {
  client.connect((err, db)=> {
    db.db('reviews').collection(tableName).deleteMany( (err,resp)=> {
      if(callback) {
        callback(resp);
      }
      console.log('collection cleared');
    });
  });
};

var readCollection = (callback)=> {
  client.connect(function(err) {
    console.log('Connected successfully to server');
    client.db(dbName).collection(tableName).find().toArray((err, dbDocs)=> {
      callback(dbDocs);
    });
  });
};

var writeCollection = (obj, collectionName ,callback)=> {
  client.connect(function(err) {
    var db = client.db(dbName);
    var collection = db.collection(tableName);
    collection.insertMany( obj, (err, promise)=> {
      if (callback) {
        callback(promise);
      }
    });
  });
  client.close();
};


exports.accessHelpers = {
  readCollection,
  writeCollection,
  clearDatabase
};

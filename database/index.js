const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const dbName = 'reviews';
var tableName = 'pid3020612-405'; //product#
const client = new MongoClient(uri);

var clearDatabase = function() {
  client.connect((err, db)=> {
    db.db('reviews').collection(tableName).deleteMany();
  });
};


var readCollection = (callback)=> {
  client.connect(function(err) {
    if (err) {
      throw 'err connecting';
    }
    console.log('Connected successfully to server');
    client.db(dbName).collection(tableName).find().toArray((err, dbDocs)=> {
      callback(dbDocs);
    });
  });
};

var writeCollection = (obj, collectionName)=> {
  client.connect(function(err) {
    if (err) {
      throw 'err connecting';
    }
    var db = client.db(dbName);
    var collection = db.collection(tableName);
    collection.insertMany( obj, (err, promise)=> {
      console.log(promise);
    });
  });
  client.close();
};


exports.accessHelpers = {
  readCollection,
  writeCollection,
  clearDatabase
};

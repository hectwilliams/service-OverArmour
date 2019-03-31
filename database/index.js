const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const dbName = 'reviews';
const tbName = 'pid1000';
const client = new MongoClient(uri);

var clearDatabase = function() {
  client.connect((err, db)=> {
    db.db('reviews').collection('pid1000').deleteOne();
  });
};


var readCollection = (callback)=> {
  client.connect(function(err) {
    if (err) {
      throw 'err connecting';
    }
    console.log('Connected successfully to server');
    client.db(dbName).collection(tbName).find().toArray((err, dbDocs)=> {
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
    var collection = db.collection(collectionName);
    collection.insertMany( obj, (err, promise)=> {
      console.log(promise);
    });
  });
};


exports.accessHelpers = {
  readCollection,
  writeCollection,
  clearDatabase
};

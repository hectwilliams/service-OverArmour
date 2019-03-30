const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// DB INFO
const dbName = 'reviews';
const tbName = 'pid1000';
// CLIENT
const client = new MongoClient(url);

 var clearDatabase = function() {
  MongoClient.connect(url , (err,db)=>{
    db.db('reviews').collection('pid1000').remove();
  } );
}


var readCollection = (callback)=>{
  client.connect(function(err) {
    if (err) {
      throw 'err connecting';
    }
    console.log('Connected successfully to server');
     client.db(dbName).collection(tbName).find().toArray((err,dbDocs)=>{
      callback(dbDocs);
    })
  });
};

var writeCollection = (obj,collectionName)=>{
  client.connect(function(err) {
    if (err) {
      throw 'err connecting';
    }
    var db = client.db(dbName);
    var collection =  db.collection(collectionName);
    collection.insertMany( obj,(err, promise)=>{
      console.log(promise);
    });
  });
};


exports.modules = {
  readCollection,
  writeCollection,
  clearDatabase
};

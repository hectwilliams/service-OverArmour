const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'reviews';
const optionsTableName = 'Option';
const testimonialTableName = 'Testimonial';

// Create a new MongoClient
const client = new MongoClient(url);


var readFeatureList = ()=>{
  client.connect(function(err) {

    if (err) {
      throw 'err connecting';
    }
    console.log('Connected successfully to server');

    var db = client.db(dbName);
    db.collection(optionsTableName).find({}).toArray((err, docs)=>{
      console.log(docs);
      console.log('features list read successfully');
    });

    client.close();
  });
};


exports.modules = {
  readFeatureList
};

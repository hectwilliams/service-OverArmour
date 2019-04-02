var db = require('../database/index');
var s3 = require('../amazon/index');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const uri = '/en-us/ua-curry-6-basketball-shoes/pid3020612-405';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// db.accessHelpers.clearDatabase(); // --> DEBUG ONLY :)

app.get( `${uri}/review-features`, (req, res )=> {
  res.send({message: {msg: 'more-review-comming soon'}});
});

app.get( `${uri}/shoe-testimonial`, (req, res )=> {
  db.accessHelpers.readCollection( (dbCollection)=>{
    console.log(dbCollection);
  });
  res.send({message: {msg: 'more-testimonials-comming soon'}});
});

app.get( `${uri}/aws`, (req, res )=> {
  s3.accessHelpers.test ( (data)=>{
    res.send({message: data});
  });
});
app.listen(3005, ()=>{
  console.log('listening on port 3005');
});

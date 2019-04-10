var db = require('../database/index');
var s3 = require('../amazon/index');
var express = require('express');
var amazon = require('../amazon/index');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var faker = require('faker');


const uri = '';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// db.accessHelpers.clearDatabase(); // --> DEBUG ONLY :)
//
app.get( `${uri}/aws`, (req, res )=> {
  s3.accessHelpers.test((data)=> {
    res.send({message: data});
  });
});

app.get(`${uri}/init`, (req, res)=> {

  db.accessHelpers.readCollection(0, (err, dbCollection)=>{
    console.log(req.path)
    // return res.status(200).end();
    if (err) {
      /*error*/
      console.log('read error');
      res.send(500);
      res.end();
    } else {
      console.log(dbCollection);
      db.accessHelpers.sortCollection(dbCollection); //mutating! -always serving ordered reviews, sorted by most recent post at the top

      amazon.accessHelpers.fetchStatic((err, data) => {
        if (!err) {
          res.status(200);

          data.push(faker.image.abstract(), faker.image.abstract());

          dbCollection.unshift(data);

          dbCollection.unshift( db.accessHelpers.avgStatsCollection(dbCollection));
          res.send(dbCollection);
        } else {
          console.log('err initializing page');
        }
      });
    }
  });
});

app.get(`${uri}/:id`, (req,res)=> {
  var getPath =  path.join ( __dirname, '..', 'public', 'index.html') ;
  res.sendFile( getPath);
});

app.put(`${uri}/add-review`, (req, res)=>{
  var re = /pid.+-[0-9]{3}?/;
  tableName = ((req.path)).match(re);
  if (tableName[0]) {
    tableName = tableName[0];
  }

  db.accessHelpers.writeOnceToCollection(req.body, tableName, (err, db )=>{
    if (err) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.end();
    db.close();
  });
});

app.put(`${uri}/likes`, (req, res)=>{
  db.accessHelpers.updateCollection({user: req.body.user}, {likes: req.body.data}, (err, db)=>{
    if (err) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.end();
    db.close();
  });
});



app.put(`${uri}/dislikes`, (req, res)=>{
  db.accessHelpers.updateCollection( {user: req.body.user}, {dislikes: req.body.data }, (err, db)=>{
    if (err) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.end();
    db.close();
  });
});

app.listen(3005, ()=>{
  console.log('listening on port 3005');
});




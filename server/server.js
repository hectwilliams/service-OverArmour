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





app.put(`${uri}/add-review`, (req, res)=> {
  db.accessHelpers.writeOnceToCollection(req.body, (err, db )=> {
    if (err) {
      res.status(200);
    } else {
      res.status(200);
    }
    res.end();
    // db.close();
  });
});



app.put(`${uri}/likes`, (req, res)=> {
  db.accessHelpers.updateCollection({user: req.body.user,id: req.body.id}, {likes: req.body.data}, (err, db)=> {
    if (err) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.end();
    // db.close();
  });
});

app.put(`${uri}/dislikes`, (req, res)=> {
  console.log('shshh')
  db.accessHelpers.updateCollection({user: req.body.user, id: req.body.id}, {dislikes: req.body.data}, (err, db)=> {
    if (err) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.end();
    // db.close();
  });
});

// db.accessHelpers.clearDatabase(); // --> DEBUG ONLY :);

app.get( `${uri}/aws`, (req, res )=> {
  s3.accessHelpers.test((data)=> {
    res.send({message: data});
  });
});


app.get( [`${uri}/init`, `${uri}/reviews/:id` ], (req, res)=> {
  var id = null;
  var idx = req.path.lastIndexOf('/');

  if (req.path.indexOf('review') !== -1) {
    id = req.path.slice(idx + 1)
  } else {
    id = 0;
  }

  db.accessHelpers.readCollection(id, (err, dbCollection)=>{
    if (err) {
      /*error*/
      console.log('read error');
      res.send(500);
      res.end();
    } else {
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

app.use(`${uri}/:id`, (req,res,next)=> {
  var getPath =  path.join ( __dirname, '..', 'public', 'index.html') ;
  res.sendFile( getPath);
});






app.listen(3005, ()=>{
  console.log('listening on port 3005');
});

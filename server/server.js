var db = require('../database/index');

const express = require('express');
const amazon = require('../amazon/index');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const uri = ''

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use( cors() );



app.put(`${uri}/add-review`, (req, res)=> {
  db.accessHelpers.writeOnceToCollection(req.body, (err )=> {
    if (err) {
      res.status(200);
    } else {
      res.status(200);
    }
    res.end();
  });
});

app.put(`${uri}/likes`, (req, res)=> {
  db.accessHelpers.updateCollection({user: req.body.user,id: req.body.id}, {likes: req.body.data}, (err)=> {
    if (err) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.end();
  });
});

app.put(`${uri}/dislikes`, (req, res)=> {
  console.log(req.body)
  db.accessHelpers.updateCollection({user: req.body.user, id: req.body.id}, {dislikes: req.body.data}, (err)=> {
    if (err) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.end();
  });
});

// db.accessHelpers.clearDatabase(); // --> DEBUG ONLY :);

// app.get( `${uri}/aws`, (req, res )=> {
//   s3.accessHelpers.test((data)=> {
//     res.send({message: data});
//   });
// });

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
          dbCollection.unshift(data);
           db.accessHelpers.avgStatsCollection(dbCollection, (data)=>{
            (dbCollection.unshift(data));
            res.send(dbCollection);
          });
        } else {
          res.status(404);

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




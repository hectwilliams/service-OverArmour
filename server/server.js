var db = require('../database/index').modules;
var Gen = require('../database/Mock/generator');
express = require('express');
bodyParser = require('body-parser');
app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'))
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// db.clearDatabase(); // --> DEBUG ONLY :)
app.get('/review-features', (req, res)=>{
  res.send({message: {msg: 'more-review-comming soon'}});
});



app.get('/shoe-testimonial', (req, res )=>{
  db.readCollection( (dbCollection)=>{
    console.log(dbCollection);
  });
  res.send({message: {msg: 'more-testimonials-comming soon'}});
});

app.listen(3005, ()=>{
  console.log('listening on port 3005');
});

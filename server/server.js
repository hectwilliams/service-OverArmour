var dbHelpers = require('../database/index').modules
var Gen = require('../Mock/generater')
express = require('express');
bodyParser = require('body-parser');
app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'))
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*'); //accept only requests from  to en-us/ua-curry-6-basketball-shoes/pid3020612-405/
  next();
});



app.get('/review-features', (req, res)=>{
  res.send({message: {msg: 'review-comming soon'}});
  console.log(Gen.TestGen.get())
});

app.get('/shoe-testimonial', (req, res)=>{
  res.send({message: {msg: 'testimonials-comming soon'}});
});

app.listen(3005, ()=>{
  console.log('listening on port 3005');
});

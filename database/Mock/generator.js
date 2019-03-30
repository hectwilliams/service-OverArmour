var faker = require('faker')
var db = require('../../database/index');
faker.seed(100);

var genPID = function(){
  return   `pid_${ faker.random.number({min:1,max:1000}) }`;
}

var genTestimonials = function(){
  var obj= {}

  obj.gender = 'male';
  obj.height = `6'8"`;
  obj.athleteType = 'Avid';
  obj.sportsInterest= "Basketball";
  obj.gender =  faker.random.arrayElement (['male','female']);
  obj.user = faker.name.firstName({male:22});
  obj.date = faker.date.recent();
  obj.sizePurchased = faker.random.number({min:5,max:18});
  obj.performanceRating = faker.random.number({min:0,max:7});
  obj.comfortRating = faker.random.number({min:0,max:7});
  obj.sizeRating = faker.random.number({min:0,max:7});
  obj.stars = faker.random.number({min:0,max:5});
  obj.subject = faker.lorem.sentence(10,20);
  obj.review = faker.lorem.sentences(4);
  obj.picture = faker.image.sports(100,100);
  obj.likes = [ faker.random.number(100) ,faker.random.number(100)] ;
  obj.response = faker.lorem.sentences(4);
  obj.user = faker.name.firstName({male:22});
  obj.date = faker.date.recent();

  return obj;
}

var generateTable = function(callback) {
  const reviewsCount = 100;
  var tableName = 'pid1000'; //product#
  var docs= [];

  for(var i=0; i<reviewsCount; i++) {
    docs.push( genTestimonials());
  }
  db.modules.writeCollection(docs,tableName);
};
var  run = function(count) {
  generateTable();
};

exports.modules = {
  run
};

var faker = require('faker');
var db = require('../../database/index');
faker.seed(100);

var genPID = function() { //quiet for now
  return `pid_${faker.random.number({min: 1, max: 1000})}`;
};

var genTestimonials = function() {
  var obj = {};

  obj.height =  `${faker.random.number({min: 5, max:7})} '${faker.random.number({min: 0, max:11})}"`
  obj.gender = faker.random.arrayElement(['Avid', 'Casual' ,'Professional']);
  obj.sportsInterest = faker.random.arrayElement(['Basketball', 'Soccer', 'Basball, Softball', 'Field Hockey', 'Football', 'Golf', 'Lacrosse', 'Rugby', 'Volleyball']);

  obj.gender = faker.random.arrayElement(['male', 'female']);
  obj.user = faker.name.firstName({male: 22});
  obj.date = faker.date.recent();
  obj.sizePurchased = faker.random.number({min: 5, max: 18});
  obj.performanceRating = faker.random.number({min: 0, max: 7});
  obj.comfortRating = faker.random.number({min: 0, max: 7});
  obj.sizeRating = faker.random.number({min: 0, max: 7});
  obj.stars = faker.random.number({min: 0, max: 5});
  obj.subject = faker.lorem.words({num:2})
  obj.review = faker.lorem.sentences(4);
  obj.picture = faker.image.sports(1, 100);
  obj.likes = [faker.random.number(100), faker.random.number(100)];
  obj.response = faker.lorem.sentences(4);
  obj.user = faker.name.firstName({male: 22});
  obj.date = faker.date.recent();
  obj.logoA = faker.image.abstract();
  obj.logoB = faker.image.nature();
  obj.dislikes = [faker.random.number(100), faker.random.number(100)];

  obj.responseDate = faker.date.past()
  return obj;
};

var generateTable = function(callback) {
  const reviewsCount = 100;
  var tableName = 'pid3020612-405'; //product#
  var docs = [];
  for (var i = 0; i < reviewsCount; i++) {
    docs.push( genTestimonials());
  }
  db.accessHelpers.writeCollection(docs, tableName);
};

var run = function() {
  generateTable();
};

exports.accessHelpers = {
  run
};

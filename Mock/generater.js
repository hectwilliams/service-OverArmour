var faker = require('faker')



var TestGen = function() {
  this.user = faker.name.firstName({male:22});
  this.date = faker.date.recent();
  this.gender = 'male';
  this.height = `6'8"`;
  this.athleteType = 'Avid';
  this.sportsInterest= "Basketball";
  this.sizePurchased = faker.random.number({min:5,max:18});
  this.performanceRating = faker.random.number({min:0,max:7});
  this.comfortRating = faker.random.number({min:0,max:7});
  this.sizeRating = faker.random.number({min:0,max:7});
  this.stars = faker.random.number({min:0,max:5});
  this.subject = faker.lorem.sentence(10,20);
  this.review = faker.lorem.sentences(4);
  this.picture = faker.image.sports(100,100);
  this.likes = [ faker.random.number(100) ,faker.random.number(100)] ;
  this.response = faker.lorem.sentences(4)
}
TestGen.prototype.get = function(){
  return JSON.stringify(this)
}



module.exports.TestGen = new TestGen();

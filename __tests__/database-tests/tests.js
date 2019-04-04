const index= require('../../database/index');

describe('database tests-->', ()=>{

  test('clearing collection should return callback message of 1 ', done => {
    index.accessHelpers.clearDatabase((msg)=> {
    expect(msg.result.ok).toBe(1);
      done();
    });
  });

  test('clearing collection should return callback message of 1 ', done => {
    index.accessHelpers.clearDatabase((msg)=> {
    expect(msg.result.ok).toBe(1);
      done();
    });
  });

  test('reading collection should return list of objects', done =>{
    index.accessHelpers.readCollection( (msg)=>{
      expect(msg.constructor).toBe(Array)
      done();
    });
  });

  test('writing collection should return what was written ', done => {
    index.accessHelpers.writeCollection( obj, 'TABLE_NAME', (resp)=> {
      expect(resp).toBeDefined();
      done();
    });
  });



  var obj = [{  height: '6 \'11"',
    gender: 'male',
    sportsInterest: 'Football',
    user: 'Faustino',
    date: '2019-04-03T20:17:40.384Z',
    sizePurchased: 16,
    performanceRating: 7,
    comfortRating: 7,
    sizeRating: 6,
    stars: 3,
    subject: '',
    review: 'Rem labore in eius sunt. Dicta qui quis saepe voluptates dolore. Id quo cumque corrupti harum vitae id dolorum enim. Molestiae occaecati rerum qui sit perspiciatis architecto atque amet.',
    picture: 'http://lorempixel.com/1/100/sports',
    likes: 22,
    response: 'Accusamus aut illum ea impedit omnis libero. Deserunt quo voluptatem expedita est sed occaecati earum ex. Similique et labore dolores error magni possimus sed suscipit. Magnam beatae qui nulla ut autem explicabo.',
    logoA: 'http://lorempixel.com/640/480/abstract',
    logoB: 'http://lorempixel.com/640/480/nature',
    dislikes: 22,
    responseDate: '2018-06-27T05:03:21.621Z'}]

});
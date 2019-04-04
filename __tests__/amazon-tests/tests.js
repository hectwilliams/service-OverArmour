


describe ('s3 tests-->', ()=> {

  var awsIndex = require('../../amazon/index');
  var awsParse = require('../../amazon/parser');

  test( 'should invoke reads to s3', done => {
    awsIndex.accessHelpers.fetchStatic((msg)=>{
      expect(msg.constructor).toBe(Array);
      done();
    });
  });
  test( 'should invoke reads to s3', done => {
    awsIndex.accessHelpers.test((msg)=>{
      expect(msg.constructor).toBe(Array);
      done();
    });
  });

  var obj=  { IsTruncated: false,
    Contents:
     [ { Key: 'media/static/',
         LastModified:'2019-04-03T06:50:45.000Z',
         ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
         Size: 0,
         StorageClass: 'STANDARD' },
       { Key: 'media/static/logo.png',
         LastModified: '2019-04-03T16:25:57.000Z',
         ETag: '"c7fcd0d100f11f92e10745e428cf36bc"',
         Size: 9918,
         StorageClass: 'STANDARD' },
       { Key: 'media/static/thumpsDown.jpg',
         LastModified: '2019-04-03T10:25:54.000Z',
         ETag: '"083fccd297fc6583ff4697874ad1d268"',
         Size: 80723,
         StorageClass: 'STANDARD' },
       { Key: 'media/static/thumpsUp.jpg',
         LastModified: '2019-04-03T10:25:55.000Z',
         ETag: '"28a721d76a754aa2ab6a25872a289615"',
         Size: 80723,
         StorageClass: 'STANDARD' },
       { Key: 'media/videos/',
         LastModified: '019-03-30T05:47:08.000Z',
         ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
         Size: 0,
         StorageClass: 'STANDARD' } ],
    Name: 'fec-underamour-media',
    Prefix: '',
    MaxKeys: 1000,
    CommonPrefixes: [],
    EncodingType: 'url',
    KeyCount: 5,
    StartAfter: 'media/static' }


  test( 'should return Array', ()=> {
    expect( awsParse.fetchImages(obj).constructor ).toBe(Array);
  });

})

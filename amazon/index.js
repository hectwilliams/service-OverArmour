
const aws = require('aws-sdk');
const s3 = new aws.S3(); /*s3 service object */
const bucketName = 'fec-underamour-media';
const parse = require('./parser');


var test = (callback)=> {
  var param = {
    Bucket: bucketName,
    StartAfter: 'media/images',
    EncodingType: 'url',
  };

  s3.listObjectsV2(param, (err, data)=> {
    callback(parse.fetchImages(data));
  });
};


var fetchStatic = (callback)=> {
  var param = {
    Bucket: bucketName,
    StartAfter: 'media/static',
    EncodingType: 'url',
  };

  s3.listObjectsV2(param, (err, data)=> {
    callback(parse.fetchImages(data));
  });
};

exports.accessHelpers = {
  test,
  fetchStatic
};


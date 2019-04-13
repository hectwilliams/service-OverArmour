
const aws = require('aws-sdk');
const s3 = new aws.S3(); /*s3 service object */
const bucketName = 'fec-underamour-media';
const host = 'https://s3-us-west-1.amazonaws.com/';
const dirPrefix = 'fec-underamour-media/media/';

var fetchStatic = (callback)=> {
  imageList = [];
  // fixed items
  fetchS3Image(imageList, 'static/', 3, 'png');
  fetchS3Image(imageList, 'images/', 9, 'jpg');
  if(imageList.length === 0 ) { //something is wrong
    callback(true);
  } else {
    callback(null, imageList);
  }
};

var fetchS3Image = (array, dir, count, ext) => {   // --> mutate array
  for ( var i = 0; i < count; i++) {
    array.push (`${host}${dirPrefix}${dir}${i}.${ext}`);
  }
};

exports.accessHelpers = {
  fetchStatic
}

const prefix = 'https://s3-us-west-1.amazonaws.com/fec-underamour-media/';
exports.fetchImages = (obj)=> {
  var obj = obj['Contents'];
  for (var key in obj) {
    if (obj[key].Size > 0) {
      list.push(prefix+obj[key].Key);
    }
  }
  return list;
};


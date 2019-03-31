exports.fetchImages = (obj)=> {
  var obj = obj['Contents'];
  for (var key in obj) {
    if (obj[key].Size > 0) {
      list.push(obj[key]);
    }
  }
  return list;
};


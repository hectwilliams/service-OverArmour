module.exports = {
  entry: "./client/index.jsx",

  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,      //regex
        exclude: /node_modules/,   //regex
        use : ['babel-loader']
      }
    ]
  },

  resolve : {
    extensions : ['.js', '.jsx']
  },

  output: {
    path: __dirname + '/public',
    filename : "bundle.js"
  }

};






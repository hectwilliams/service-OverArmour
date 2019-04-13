module.exports = {
  entry: "./client/index.jsx",

  module : {
    rules : [


      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader",
            options: {
              modules: true
            }

          }

        ]
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|hidden_misc)/,
        use : ['babel-loader']
      }



    ]

  },

  resolve : {
    extensions : ['.js', '.jsx', '.css']
  },

  output: {
    path: __dirname + '/public',
    filename : "bundle-hector.js"
  }
};






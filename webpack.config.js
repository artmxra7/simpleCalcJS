var webpack = require('webpack');
module.exports = {
  entry: {
    app: "./resource/assets/js/app.js"
  },
  output: {
    path: __dirname + "/public/assets/js/",
    filename: "[name].js"
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          
        },
        
      },
    ]
  }
}
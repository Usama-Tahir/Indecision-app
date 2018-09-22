// entry point app.js
// where to put final bundle.js file
 const path = require('path');
module.exports = {
    entry: './src/app.js',
    output : {
        path: path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },
    // loader
    module: {
        rules: [
          {
              loader : 'babel-loader',
              test : /\.js$/,
              exclude : /node_modules/
          },
          {
              test : /\.s?css$/,
              use : [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
              ]
          }
        ]
      },
    //   for tracking files.
      devtool : 'cheap-module-eval-source-map',
      devServer: {
          contentBase : path.join(__dirname, 'public')
      } 

};
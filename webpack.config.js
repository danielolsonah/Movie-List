module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

// module.exports = {
//   mode: 'development',  
//   entry: __dirname + '/client/src/index.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/public'
//   },
//   module: {
//     rules: [{
//       test: /\.jsx?/,
//       include: __dirname + '/client',
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'stage-3']
//       }
//     }]
//   }
// }
var config = {
 entry: {
   path: __dirname+'/src/main.js',
 },
 output: {
   path: __dirname+'/../public',
   filename: 'bundle.js'
 },
 module: {
   loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      }
   ]
 },
 devtool: 'eval-source-map'
}

module.exports = config;

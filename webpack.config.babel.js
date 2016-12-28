export default {
  entry: {
    main: './index.js',
  },
  devtool: '#cheap-module-source-map',

  output: {
    path: './lib',
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    ],
  },
}

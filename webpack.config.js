const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './'),
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'jsx-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
      },
    ],
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'app'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
    }
  ],
    
  },
};
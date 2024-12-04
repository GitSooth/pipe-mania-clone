const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your project
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Bundled output directory
    clean: true, // Cleans the output directory before every build
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Handles CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/, // Handles image files
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]', // Preserve original file name
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Uses your existing HTML as a template
    }),
  ],
  mode: 'development', // Change to 'production' for optimized builds
  devtool: 'inline-source-map', // Helpful for debugging
};
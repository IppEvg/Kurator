const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          'style-loader',
          'css-loader',  
          'sass-loader'  
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'  
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'  
          
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]' 
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp4|webm|ogg|avi|mov)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[hash][ext][query]'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: 'src/index.html' 
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/images', to: 'images' },
        { from: 'public/svg', to: 'svg' },
        { from: 'public/fonts', to: 'fonts' },
        { from: 'public/videos', to: 'videos' }
      ],
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'), 
    },
    port: 8080, 
    hot: true, 
    historyApiFallback: true, 
    compress: true,
    open: true,
     liveReload: false, 
},
devtool: 'source-map',

};
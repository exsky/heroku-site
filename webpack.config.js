var webpack = require('webpack');

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
  entry: {
    bundle: './frontend/src/index.js',
    blog: './frontend/src/js/blog.js',
    base: './frontend/src/scss/base.scss',
    home: './frontend/src/scss/home.scss',
    sidebar: './frontend/src/scss/sidebar.scss'
  },
  // output 是放入產生出來的結果的相關參數
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/js'),
    // path: path.resolve(__dirname, 'frontend/dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      path: path.resolve(__dirname, 'static/css'),
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyPlugin([
      {
        from: "./frontend/src/image/favicon.ico",
        to: "../image/favicon.ico",
      },
    ])
  ],
  module: {
    rules: [
      // JS
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // CSS
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader'
        ],
      },
      // SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // Background picture
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000,  /* 小於 4000kB 的圖片轉成 base64 */
              outputPath: '../image/',
              name: '[name].[ext]'
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          extractComments: 'all',
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
          }
        }
      })
    ]
  }
};

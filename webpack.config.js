import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { spawn } from 'child_process';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import DashboardPlugin from 'webpack-dashboard/plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const port = process.env.PORT || 3000;
const publicPath = `http://localhost:${port}`;
const srcPath = path.join(__dirname + '/App');

export default {
  devtool: 'inline-source-map',
  externals: [
    'foundation-sites'
  ],
  entry: [
    'react-hot-loader/patch',
    './App/index.js'
  ],
  output: {
    publicPath: `http://localhost:${port}/`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcPath,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              'react-hot-loader/babel'
            ]
          }
        }
      },
      {
        test: /\.(?:sass|scss)$/,
        use: [
          'style-loader',
          'css-loader', {
            loader: 'sass-loader',
            query: {
              includePaths: [path.resolve(__dirname, 'node_modules')]
            }
          }
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
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          }
        },
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          }
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/, use: 'url-loader' },
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      appMountId: 'app',
      devServer: publicPath,
      title: 'Official Starter\'s Guide to Redux'
    })
  ],
  node: {
    __dirname: false,
    __filename: false
  },
  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: srcPath,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000
    },
    historyApiFallback: true,
    before() {
      if (process.env.START_HOT) {
        console.log('Staring Main Process...');
        spawn(
          'npm',
          ['run'],
          { shell: true, env: process.env, stdio: 'inherit' }
        )
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError));
      }
    }
  },
}

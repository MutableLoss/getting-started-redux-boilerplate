import path from 'path';
import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import { dependencies as externals } from './package.json';

export default {
  entry: [
    './App/index.js'
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
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
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    pathinfo: true,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'App'),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.NamedModulesPlugin()
  ]
};

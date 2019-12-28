/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isLocal = slsw.lib.webpack.isLocal;

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true
  }
};

// const tsLoader = {
//   loader: 'ts-loader',
//   options: {
//     transpileOnly: true
//   }
// };

module.exports = {
  mode: isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      src: path.join(__dirname, 'src')
    }
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [babelLoader]
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};

import {Configuration} from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import glob from 'glob';

const config: Configuration = {
  target: 'node',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: glob.sync('./spec/**/*-test.ts'),
  output: {
    path: path.resolve(__dirname, 'dist/test'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}

export default config;

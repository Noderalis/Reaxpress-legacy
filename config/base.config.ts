import TsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import { cpus } from 'os';
import { Configuration, ProgressPlugin } from 'webpack';
import isProductionBuild from './util/env';
import paths from './util/paths';
const PnpPlugin = require('pnp-webpack-plugin');

const base: Configuration = {
  devServer: {
    contentBase: paths.build.public.html,
    hot: true,
    port: 3000,
  },
  devtool: 'source-map',
  mode: isProductionBuild ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'thread-loader',
            options: {
              workers: cpus.length - 1,
              poolTimeout: Infinity,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: paths.config.tsconfig,
              transpileOnly: true,
              experimentalWatchApi: true,
              happyPackMode: true,
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  node: {
    __dirname: true,
  },
  plugins: [
    new ProgressPlugin(),
    new TsCheckerPlugin({
      async: !isProductionBuild,
      eslint: {
        enabled: false, // TODO resolve parsing errors for html and sass
        files: './packages/**/*',
      },
      typescript: {
        build: true,
        configFile: paths.config.tsconfig,
        mode: 'write-tsbuildinfo',
        profile: isProductionBuild,
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [PnpPlugin],
  },
  resolveLoader: {
    plugins: [PnpPlugin.moduleLoader(module)],
  },
  stats: {
    warnings: false,
  },
  // target: 'node',
  watch: !isProductionBuild,
};

export default base;

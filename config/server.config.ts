import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';
import paths from './util/paths';
import isProductionBuild from './util/env';

const backend: Configuration = {
  entry: {
    server: paths.source.backend.server,
  },
  output: {
    filename: '[name].js',
    path: paths.build.backend.root,
  },
  plugins: [new CleanPlugin({ verbose: !isProductionBuild })],
  target: 'async-node',
};

export default backend;

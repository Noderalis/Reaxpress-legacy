import { Configuration } from 'webpack';
import paths from './util/paths';

const server: Configuration = {
  entry: {
    server: paths.source.backend.server,
  },
};

export default server;

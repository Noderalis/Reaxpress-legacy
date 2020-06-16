import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import base from './base.config';
import done from './done.config';
import frontend from './frontend.config';
import backend from './server.config';
import isProductionBuild from './util/env';

console.log(
  `Starting ${isProductionBuild ? 'production' : 'development'} environment...`
);

const config: Configuration[] = [
  merge(base, frontend, done),
  merge(base, backend, done),
];

export default config;

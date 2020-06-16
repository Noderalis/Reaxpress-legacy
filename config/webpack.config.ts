import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';
import TsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import { cpus } from 'os';
import { Configuration, ProgressPlugin } from 'webpack';
import merge from 'webpack-merge';
import frontend from './frontend.config';
import server from './server.config';
import isProductionBuild from './util/env';
import paths from './util/paths';
const PnpPlugin = require('pnp-webpack-plugin');

console.log(
  `Starting ${isProductionBuild ? 'production' : 'development'} environment...`
);

const config: Configuration = merge(
  {
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
    output: {
      filename: '[name].js',
      path: paths.build.root,
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
      new CleanPlugin({ verbose: !isProductionBuild }),
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
    target: 'async-node',
    watch: !isProductionBuild,
  } as Configuration,
  frontend as Configuration,
  server as Configuration,
  {
    plugins: [
      {
        apply: (compiler) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          compiler.hooks.done.tap('DonePlugin', (_stats) => {
            if (isProductionBuild) {
              setTimeout(() => {
                console.log(`Compilation complete...`);

                process.exit(0);
              }, 0);
            }
          });
        },
      },
    ],
  } as Configuration
);

export default config;

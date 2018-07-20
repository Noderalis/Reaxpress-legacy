/**
 * This is simply a starter file for Fusebox configurations.
 * This is a simple configuration but you can add complexity for
 * more features and optimizations.
 *
 * Refer to https://fuse-box.org for details.
 */

import {
  Bundle,
  BundleProducer,
  CSSPlugin,
  EnvPlugin,
  FuseBox,
  QuantumPlugin,
  SassPlugin,
  WebIndexPlugin,
} from 'fuse-box';

// tslint:disable-next-line
const pkg = require('./package.json');

let fuse: FuseBox;
let app: Bundle;

const DEV_ENV = process.env['NODE_ENV'] === 'development';
const PROD_ENV = process.env['NODE_ENV'] === 'production';

/**
 * Fusebox supplies `Sparky.task(${name}, () => {})`, however
 * I prefer to use functions. It just feels cleaner.
 */
function build(): Promise<BundleProducer> {
  fuse = FuseBox.init({
    homeDir: 'src',
    output: 'dist/$name.js',
    target: 'browser@esnext',
    cache: DEV_ENV,
    plugins: [
      [SassPlugin(), CSSPlugin()],
      EnvPlugin({ NODE_ENV: PROD_ENV ? 'production' : 'development' }),
      WebIndexPlugin({
        template: 'resources/index.html',
        path: '.',
        title: pkg.name,
      }),
      PROD_ENV && QuantumPlugin({}),
    ],
  });

  if (DEV_ENV) {
    fuse.dev();
  }

  app = fuse.bundle('app').instructions('> app/index.tsx + fuse-box-css');

  if (DEV_ENV) {
    app.watch().hmr();
  }

  return fuse.run();
}

build();

import { Configuration } from 'webpack';
import isProductionBuild from './util/env';

const done: Configuration = {
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
};

export default done;

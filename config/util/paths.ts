import path from 'path';

const root = (pathToFile: string, filename?: string) =>
  path.resolve(
    __dirname,
    '../..',
    filename ? `${pathToFile}/${filename}` : pathToFile
  );

/**
 * The paths to the frontend app and server
 * TODO: Automate path finding, consider *resolve*-like module
 */
const paths = {
  source: {
    frontend: {
      app: root('frontend/src/app', 'index.tsx'),
      root: root('frontend'),
      server: root('frontend/src/server', 'server.ts'),
    },
    template: {
      html: root('frontend/public', 'index.html'),
    },
  },
  build: {
    root: root('build'),
    public: {
      html: root('build/public', 'index.html'),
    },
  },
  config: {
    tsconfig: root('tsconfig.json'),
  },
};
export default paths;

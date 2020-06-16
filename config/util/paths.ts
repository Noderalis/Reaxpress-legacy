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
      app: root('packages/frontend/src/', 'index.tsx'),
      root: root('packages/frontend'),
    },
    backend: {
      server: root('packages/backend/src', 'server.ts'),
    },
    template: {
      html: root('packages/frontend/public', 'index.html'),
    },
  },
  build: {
    frontend: {
      root: root('dist/frontend'),
    },
    backend: {
      root: root('dist/backend'),
    },
    root: root('dist'),
    public: {
      html: root('dist/frontend/public', 'index.html'),
    },
  },
  config: {
    tsconfig: root('tsconfig.json'),
  },
};
export default paths;

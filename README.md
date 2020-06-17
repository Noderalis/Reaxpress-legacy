# [Webpack, Workspaces] Reaxpress

This repository, aka BFL-Y2TWRS (I suck at naming so I SKUd it and other sister repos), is a true starter for people wanting to develop a React application using Yarn 2 and it's worspaces, Webpack and TypeScript for building, and React + Sass for the frontend. If you want to incorporate microservices, check out the sister repository, [Y2WT](https://github.com/TheGrimSilence/yarn-2-webpcack-typescript-starter.git).

**BFL-Y2TWRS**

- Yarn 2
- TypeScript
- Webpack
- React
- Sass

Hopefully, you'll find this useful. It's primarily meant for [Blackfall-Labs](https://blackfall-labs.com) and myself to speed up development on developing applications.

This repository is a simple React application served over Express using Yarn 2 workspaces for cleaner dependency management. This is one of many recipes in my [Yarnberry Cookbook](https://github.com/yarnberry-cookbook), stupid name I know.

## Install

> Make sure you have Node >= 10 installed

Clone the repository via git:

```bash
PS C:\...> git clone --depth=1 https://github.com/Yarnberry-Cookbook/y2twrs.git <your-project-name>
```

Or use GitHub to make a [new repository](https://github.com/Yarnberry-Cookbook/y2twrs/generate)!

~~and then install the dependencies:~~

As of 2.0, Y2TWRS uses Yarn 2, which defaults to a [_zero-install_](https://yarnpkg.com/features/zero-installs) state, meaning all you have to do is run `yarn rebuild` to get started. This rebuilds _unplugged_ packages such as `node-sass` which I don't include with the repository. `.yarn/unplugged`, depending on what you require, gets too heavy to push to the repository when using packages like [_puppeteer_](https://yarnpkg.com/package/puppeteer) which ships with large executables. If you want to make this completely [_zero-install friendly_](https://yarnpkg.com/advanced/qa#which-files-should-be-gitignored), add `!.yarn/unplugged` to your `.gitignore`. and make sure you add larger files to Git LFS otherwise GitHub and others may revoke your ability to push to your remote repository.

Just run `rebuild`, yarn will build the required dependencies under `unplugged` and everything will _just work_. Thank you Yarn Modern!

```bash
PS C:\...> <your-project-name>
PS C:\...> yarn rebuild
```

## Building

> Performance improvements are here and there, if you can find a way that works faster, feel free to submit a PR! I'm trying to speed up TypeScript specifically, and the `tsbuildinfo` file is the bigger pain.

```bash
PS C:\...> yarn build
Starting production environment...
[WEBPACK] Building 2 targets
Starting production environment...
[WEBPACK] Started building static/js/app.js
Starting production environment...
[WEBPACK] Started building server.js
...
# ↑↑ It's *really* buggy...
...
Compilation complete...
[WEBPACK] Finished build after 14.423 seconds
```

It's that simple! It'll take roughly 15-seconds to build. _**Reaxpress**_ uses multiple configs that are merged and run in parallel to make the engine run smoothly. Although a few bugs are noted such as webpack running in a loop in GitHub Actions. Eventually, `webpack-dev-server` and `tsbuildinfo` will be fully supported and should cut compilation done significantly, although 15 seconds is reasonable for TypeScript.

## Testing

> The heaviest part of all of the recipes in the cookbook, @testing-library/react takes forever.

```bash
PS C:\...> yarn test
 PASS  packages/frontend/src/components/Checkbox/test/.spec.tsx (19.527 s)
  √ CheckboxWithLabel changes the text after click (339 ms)

 PASS  packages/backend/src/test/.test.ts
  Jest and Supertest work flawlessly
    √ Gets the server and returns without open handles (149 ms)

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        32.446 s # ouch! 👀
Ran all test suites.
```

Tests in _**Reaxpress**_ are opinionated, using two testing variants for React. You'll see `.spec.tsx` and `.test.tsx`, the former implies UI-based testing and the latter implying data/state-based testing. Test files are also unnamed to reduce repetitive file creation. You can name them of course.

## Run

`webpack-dev-server` is currently unused but a dependency for future iterations. This is because `react-hot-loader` requires changing the configuration and relying on Babel, which I hate, and `react-fast-loader` is currently under development. Until then, I'm searching for reasonable solutions. Sorry for the inconvenience.

```bash
PS C:\...> yarn start
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node dist/backend/server.js`
Server listening at http://localhost:3000
```

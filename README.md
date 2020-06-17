# bfl-y2twrs 

This repository, aka Y2TWRS, is a true starter for people wanting to develop a React application using Yarn 2 and it's worspaces, Webpack and TypeScript for building, and React + Sass for the frontend. If you want to incorporate microservices, check out the sister repository, [Y2WT](https://github.com/TheGrimSilence/yarn-2-webpcack-typescript-starter.git).

## Usage 

If you've stumbled upon this repository congratulations 🎉

Honestly, use it as you please. It's primarily meant for [Blackfall-Labs](https://blackfall-labs.com) and myself to speed up development on test applications.

Over time as I add play around more I'll add onto this repository
so stay up to date! 🏁

## Install

> Make sure you have Node >= 10 installed

Clone the repository via git:

```bash
git clone --depth=1 https://github.com/thegrimsilence/react-typescript-boilerplate.git <your-project-name>
```

~~and then install the dependencies:~~
As of 2.0, Y2TWRS uses Yarn 2, which defaults to a [_zero-install_](https://yarnpkg.com/features/zero-installs) state, meaning all you have to do is run `yarn rebuild` to get started. This rebuilds _unplugged_ packages such as `node-sass` which I don't include with the repository. `.yarn/unplugged`, depending on what you require, gets too heavy to push to the repository when using packages like [_puppeteer_](https://yarnpkg.com/package/puppeteer) which ships with large executables. If you want to make this completely [_zero-install friendly_](https://yarnpkg.com/advanced/qa#which-files-should-be-gitignored), add `!.yarn/unplugged` to your `.gitignore`. and make sure you add larger files to Git LFS otherwise GitHub and others may revoke your ability to push to your remote repository. Then you just:

```bash
$ cd <your-project-name>
$ yarn rebuild
```

## Run

TODO

## Build

TODO

## Testing

TODO

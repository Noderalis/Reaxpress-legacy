# React TypeScript Boilerplate 💼

## Usage 🚀

> Speed up development?

If you've stumbled upon this repository congratulations 🎉

Honestly, use it as you please. It's primarily meant for [Ebongarde](https://ebongarde.com) and myself to speed up development on test applications.

Over time as I add play around more I'll add onto this repository
so stay up to date! 🏁

## Install

> Make sure you have Node >= 8 installed

Clone the repository via git:

```bash
git clone --depth=1 https://github.com/thegrimsilence/react-typescript-boilerplate.git your-project-name
```

and then install the dependencies:

```bash
$ cd your-project-name
$ yarn
```

## Run

Start `build:dev` to run the application in development mode. This allows for HMR (Hot Module Reloading) and File Watching to reload the application as you make changes.

As you can see, the application (as is, without any additions you may add) compiled to a little less than a Megabyte in less than a second! ⌛👀

```bash
$ yarn build:dev
--- FuseBox 3.4.0 ---
  → Typescript config file:  \src\tsconfig.json
  → Typescript forced script target: ESNext
  → Applying automatic alias based on baseUrl in tsconfig.json
  →
        app => "~/app"
        typings => "~/typings"
  → Typescript script target: ESNext

--------------------------
Bundle "app"

...

size: 807.8 kB in 842ms

-----------------------------------------------------------------
Development server running http://localhost:4444 @ 3.4.0
-----------------------------------------------------------------

17:02:44: Client connected
17:02:45: HMR is enabled
```

## Build

Run `build:prod` to compile the application into `dist/`, this launches Fusebox's [Quantum](https://fuse-box.org/page/quantum) plugin.

As you can see, the application (as is, without any additions you may add) compiled to a little less than a Megabyte in less than a second! ⌛👀 With Quantum, you can see that it's actually smaller than the development build thanks to [Dead Code Elimination](https://fuse-box.org/page/quantum#dead-code-elimination), [Tree Shaking](https://fuse-box.org/page/quantum#tree-shaking), and more!

By default, the Fusebox API is exported into it's own file, `api.js`. You can change this by setting `bakeApiIntoBundle: true | bundleName`.

```bash
$ yarn build:prod
--- FuseBox 3.4.0 ---
  → Typescript config file:  \src\tsconfig.json
  → Typescript forced script target: ESNext
  → Applying automatic alias based on baseUrl in tsconfig.json
  →
        app => "~/app"
        typings => "~/typings"
  → Typescript script target: ESNext
--------------------------
Bundle "app"

...

size: 787.6 kB in 831ms

  --------------

Launching quantum core
  → Generating abstraction, this may take a while
  → Abstraction generated
  → Process bundle app

...

  → Uglifying app...
  → Using uglify-es because the target is greater than ES5 or es6 option is set
  → Done uglifying app
  size:  99.3 kB, 31.9 kB (gzipped)
  → Uglifying api.js...
  → Using uglify-es because the target is greater than ES5 or es6 option is set
  → Done uglifying api.js
  size:  246 Bytes, 164 Bytes (gzipped)
```

## Areas of Interest

> Or areas that may be weird to most devs...

### First of all

I'm autistic so I prefer my way, and have no idea if others do it
that way too. I've been a developer for a few years but am by no
means a part of the developer community. I'm actually the only
developer I know besides my brother, [Jason](https://ebongarde.com/company).

### Fusebox

I've used webpack a lot, and I don't like it. I haven't checked
on it's progress since I used it in early 2017. Why?

- Speed
- Performance
- TypeScript Support

Fusebox is built around TypeScript and therefore comes TypeScript-first.
Speed is no issue, often-times compiling code within milliseconds.
Performance is only an issue if you don't know what you're doing.
I guess the same could be said for webpack but eh.

### Structure

Many people structure things their own way, I'm one of them.
Folder structure is based around [VS Code Organization](https://github.com/microsoft/vscode/wiki/code-organization),
although obviously depending on the severity, the structure changes.
File structure is okay, the [Fusebox Configuration](./fuse.ts) is function-based
instead of using their `Sparky.task(${name}, () => { }` method.

One thing you'll quickly realise is that, yes, there is a TypeScript Configuration file. No, it is not located in the root. It's located in `src/`, read below.

### React

I'm a big fan of [React](https://reactjs.org), it's simple and easy.
Although, I have a confession... I use JSX 🙊. I hate `React.createClass()`,
and JSX, alongside GraphQL, allow you to design a UI based on the data.

### TypeScript

Okay so oddly enough, I learned TypeScript before I ever learned JavaScript.
In fact, I hated JS. But, I was a big fan of controlled data and when TypeScript
matured into what it is now I couldn't resist learning it in early 2017.

It helps you get stricter than ever before with your code, autocomplete (at least inside VS Code I don't use other editors so I don't know), and detect errors long before they happen. I would say more, but like, you're a developer. If you haven't heard of TypeScript, go learn 😂.

The `tsconfig.json` is located inside of `src/`. This is because I HATE relative paths.
So `tsconfig.json (baseUrl)` is set to `"."`. This means import paths resolve as
`app/someFolder/someFolder/file.ts`. It's cleaner, and easier to understand than dot-paths.
Is that their name? Idk. My name for them if not.

In the June release of VS Code, there was a bug with TypeScript 2.9.2 and
auto importing suggestions and paths being strictly relative even modules.
So until this is fixed, this project is fixed to TypeScript@2.9.1

### VS Code

There are of course some settings and recommendations in `.vscode/`. I love
VS Code, and that's the end of that. Your editor, your preference.

### Styling

By default, you can import your styles via `import app/path/to/your/stylesheet.(css|scss)`.
Of course, you don't have to conform to the non-relative module resolution. You can just as easily use `import ./stylesheet.(css|scss)`.

## License

MIT © [Adrian Roach](https://github.com/thegrimsilence)

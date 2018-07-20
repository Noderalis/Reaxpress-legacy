# React TypeScript Boilerplate 💼

## Usage 🚀

> Speed up development?

If you've stumbled upon this repository congratulations 🎉

Honestly, use it as you please. It's primarily meant for [Ebongarde](https://ebongarde.com) and myself to speed up development on test applications.

Over time as I add play around more I'll add onto this repository
so stay up to date! 🏁

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

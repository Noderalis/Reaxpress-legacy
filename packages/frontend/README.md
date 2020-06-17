# Reaxpress Frontend

The frontend is powered by React, and served over Express so that you don't have to worry about doing it yourself. Ideally you'd have React as your UI and Express as your main application server. It'll use [ekalinin/sitemap.js](https://github.com/ekalinin/sitemap.js) to generate a sitemap on request and cache it, as well as serve a robots.txt. If you have more suggestions feel free to make a PR!

## React Structure

Ah, the most debated topic of old. I fould a beautiful article by [ROBIN WIERUCH](https://www.robinwieruch.de/react-folder-structure) that sums up a structure I'm fond of, but still needs work. You have the following structure in `src/app`:

```bash
frontend/src/
∟ components/   // Anything reusable
  ∟ Navbar/
    ∟ test/
      ⊢ .test.tsx
      ⊢ .spec.tsx
    ⊢ index.tsx
    ⊢ style.scss
  ∟ Footer/
    ∟ ⋯
  ∟ ⋯
∟ domain        // Page layouts
  ∟ Home/
    ∟ test/
      ⊢ .test.tsx
      ⊢ .spec.tsx
    ⊢ index.tsx
    ⊢ style.scss
  ∟ About/
    ∟ ⋯
  ∟ ⋯
⊢ index.tsx     // Just ReactDOM.render()
```

You could opt for another structure, this is my method of madness. If you're curious about `.(test|spec).tsx` naming the tests gets _too_ repetitive. You can name them using `describe('app::Navbar', () = > {...})` or however you like, and remember you don't need to test every single component. I've created some example tests, but I myself don't really test much, bad habit.

And moreso, I'm not entirely sold on the structure, no one is. But if you want a damn good reference, look to [microsoft/vscode](https://github.com/microsoft/vscode) for inspiration.

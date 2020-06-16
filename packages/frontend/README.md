# Y2WT Frontend

In order to push the limits and be more than a simple starter, I'm using a sort of microservice architecture that you can delete if you want. This also powers some of my upcoming software at [Blackfall Labs](https://blackfall-labs.com). 

The frontend is powered by React, and served over Express so that you don't have to worry about doing it yourself. Ideally you'd have React as your UI and express as your main application server, interacting with your [backend services](../services/README.md). It'll use [ekalinin/sitemap.js](https://github.com/ekalinin/sitemap.js) to generate a sitemap on request and cache it, as well as serve a robots.txt. If you have more suggestions feel free to make a PR!

## React Structure

Ah, the most debated topic of old. I fould a beautiful article by [ROBIN WIERUCH](https://www.robinwieruch.de/react-folder-structure) that sums up a structure I'm fond of, but still needs work. You have the following structure in `src/app`:

```bash
app/
∟ components/ // Stores components
  ∟ Navbar/
    ∟ test/
      ⊢ .test.tsx
      ⊢ .spec.tsx
    ⊢ index.tsx
    ⊢ style.scss
  ∟ Footer/
    ∟ ⋯
  ∟ ⋯
∟ domain
  ∟ Home/
    ∟ test/
      ⊢ .test.tsx
      ⊢ .spec.tsx
    ⊢ index.tsx
    ⊢ style.scss
  ∟ About/
    ∟ ⋯
  ∟ ⋯
```

You could opt for another structure, this is my method of madness. If you're curious about `.(test|spec).tsx` naming the tests gets *too* repetitive. You can name them using `describe('app::Navbar', () = > {...})` or however you like, and remember you don't need to test every single component. I've creating some example tests, but I myself don't really use tests at all. My code either works or it doesn't 😅.

And moreso, I'm not entirely sold on the structure, no one is. But if you want a damn good reference, look to [microsoft/vscode](https://github.com/microsoft/vscode) for inspiration.

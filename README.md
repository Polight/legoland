# LegoLand

A set of basic Web-Components usable anywhere with no installation.

The webcomponents available are about layout and widget inspired from https://csslayout.io/patterns.

As of today the following components are available:
- [Safe HTML](./bricks/safe-html.html): integrate dynamic unescaped HTML string
- [Stacked Cards](./bricks/stacked-cards.html): UI cards display
- [Holy Grail](./bricks/holy-grail.html): UI layout with sticky footer and header


## Usage

The only thing to do is to include the components and use them; it's just HTML!

Use the webcomponents in your HTML page:

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/polight/legoland/dist/index.js"></script>

<stacked-cards angle="3">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</stacked-cards>

<!-- Tune your CSS -->
<style>
  stacked-cards p {
    width: 200px;
    height: 300px;
    border: 2px solid #888;
  }
</style>
```

## Advanced Usage

You may include all components calling https://cdn.jsdelivr.net/gh/polight/legoland/dist/index.js.

If you'd rather pick a selection of components you can include the script
directly from _/dist_. Eg: `<script type="module" src="https://cdn.jsdelivr.net/gh/polight/legoland/dist/safe-html.js"></script>` to call the _safe-html_ component.


## Building Legoland

1. install the lego dependency: `npm i`
2. create your own component in the bricks folder (view [Lego](https://github.com/polight/lego) doc)
3. build it: `npm run build` (or `npm run dev` if you want an auto-refresh)


## About

These components were originally written in [Lego](https://github.com/polight/lego).

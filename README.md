# LegoLand

A set of basic Web-Components usable anywhere with no installation.

The webcomponents available are about layout and widget inspired from https://csslayout.io/patterns.

Right now the [Stacked Cards](https://csslayout.io/patterns/stacked-cards) and [Holy Grail](https://csslayout.io/patterns/holy-grail) are implemented.


## Usage

The only thing to do is to include the components and use them; it's just HTML!

Use the webcomponents in your HTML page:

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/polight/legoland@/dist/index.js"></script>

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


## About

These components were originally written in lego.

Written in [Lego](https://github.com/polight/lego)

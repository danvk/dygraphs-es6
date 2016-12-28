# Dygraphs ES6 demonstration

This repo demonstrates how you can use dygraphs with the webpack or rollup module bundlers.

To get going, clone this repo and run:

    npm install
    ./node_modules/.bin/webpack

Then open `index.html` in a browser. You should see a chart.

Alternatively, you can use rollup to generate the bundle:

    ./node_modules/.bin/rollup -c

And modify `index.html` to source `main.rollup.js`.

## How this works

The entry point is `index.js`:

```js
import Dygraph from 'dygraphs';

// or, if you don't want to use ES6 imports:
// const Dygraph = require('dygraphs');

const g = new Dygraph('graph',
`Date,A,B
2016/01/01,10,20
2016/07/01,20,10
2016/12/31,40,30
`, {
  fillGraph: true
});
```

gets - create safe javascript getter functions.
====

The examples below should explain the whole API.

```js
var gets = require('gets'),
    fn = gets('a', 'b', 'c');

fn({ a: 7 }); // => undefined
fn({ a: { b: 8 } }); // => undefined
fn({ a: { b: 8 } }).or(9); // => 9
fn({ a: { b: { c: 10 } } }).or(9); // => 10
fn({ a: { b: { c: 10 } } }).or(9).map(function(d) {
  return d + 1;
});  // => 11

```

Note: you can infinitely chain mappers and ors.

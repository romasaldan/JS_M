const {
  validation,
  forEachES6,
  forEach
} = require('./additionalFunctions');

const reduceES6 = (array, callback, initialValue) => {
  validation(array);

  let reducer = initialValue;

  forEachES6(array, (el, i, array) => reducer = callback.call(null, reducer, el, i, array));

  return reducer;
}

var reduce = function(array, callback, initialValue) {
  validation(array);

  var reducer = initialValue;

  forEach(array, function (el, i, array) {
    reducer = callback.call(null, reducer, el, i, array);
  });

  return reducer;
}

console.log(reduce([1,2,3], (cur, el, i, arr) => cur + el + i + arr[1], 1));
console.log(reduceES6([2,1,3], (cur, el, i, arr) => cur + el + i + arr[1], 1));

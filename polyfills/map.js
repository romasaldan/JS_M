const {
  forEachES6,
  forEach,
  validation
} = require('./additionalFunctions');

var map = function (array, callback, context) {
  validation(array);

  var arr = [];

  forEach(array, function (el, i, array) {
    arr.push(callback.call(context, el, i, array))
  });

  return arr;
}

const mapES6 = (array, callback, context) => {
  validation(array);

  const arr = [];

  forEachES6(array, (el, i, array) => arr.push(callback.call(context, el, i, array)));

  return arr;
}

console.log(mapES6([1,2,3], (el, i, arr) => el * i * 2 * arr[2]));
console.log(map([1,2,3], (el, i, arr) => el * i * 2 * arr[2]));
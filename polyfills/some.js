const { validation } = require('./additionalFunctions');

const someES6 = (array, callback, context) => {
  validation(array);

  for (let i = 0; i < array.length; i++) {
    if (callback.call(context, array[i], i, array)) {
      return true;
    }
  }

  return false;
}

var some = function (array, callback, context) {
  validation(array);

  for (var i = 0; i < array.length; i++) {
    if (callback.call(context, array[i], i, array)) {
      return true;
    }
  }

  return false;
}

console.log(someES6([2,3,4], el => el > 5));
console.log(some([2,3,4], function (el) {
  return el > 3;
}));

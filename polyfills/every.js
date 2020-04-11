const { validation } = require('./additionalFunctions');

const everyES6 = (array, callback, context) => {
  validation(array);

  for (let i = 0; i < array.length; i++) {
    if (callback.call(context, array[i], i, array)) {
      return false;
    }
  }

  return true;
}

var every = function (array, callback, context) {
  validation(array);

  for (var i = 0; i < array.length; i++) {
    if (callback.call(context, array[i], i, array)) {
      return false;
    }
  }

  return true;
}

console.log(everyES6([2,3,4], el => el > 5));
console.log(every([2,3,4], function (el) {
  return el > 3;
}));

const { validation } = require('./additionalFunctions');

const fromEntries = array => {
  validation(array)

  const obj = {};

  for (const [key, value] of array) {
    obj[key] = value
  }

  return obj;
}

const a =[['a', 3], ['b', 4], ['c', 2]];

console.log(fromEntries(a));
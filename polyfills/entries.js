const { isObject, keys, values } = require('./additionalFunctions');

const objectIterator = function() {
  const objectKeys = keys(this);
  const objectValues = values(this);
  let i = 0;

  return {
    next: () => ({
      value: [objectKeys[i], objectValues[i]],
      done: objectKeys.length === i++
    })
  }
}

const entries = object => {
  if (!isObject(object)) {
    throw Error('must be an object');
  }

  const arr = [];
  const iterableObject = {
    ...object,
    [Symbol.iterator]: objectIterator
  }

  for (const iterator of iterableObject) {
    arr.push(iterator)
  }

  return arr;
}

const o = {
  a:3,
  b:4,
  c:2
}

console.log(entries(o))
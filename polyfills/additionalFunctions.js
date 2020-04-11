var forEach = function (array, callback, context) {
  for (let i = 0; i < array.length; i++) {
    callback.call(context, array[i], i, array)
  }
}

const forEachES6 = (array, callback, context) => {
  for (let i = 0; i < array.length; i++) {
    callback.call(context, array[i], i, array)
  }
}

const isArray = array => !!array && !!array.constructor && array.constructor.name === 'Array';
const isFunction = func => !!func && !!func.constructor && func.constructor.name === 'Function';
const isObject = obj => !!obj && typeof obj === 'object';

const validation = (array, func) => {
  if (!isArray(array)) {
    throw Error('first argument must be an array');
  }
}

const keys = object => {
  if (!isObject(object)) {
    throw Error('must be an object');
  }

  const arr = [];

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      arr.push(key);
    }
  }

  return arr;
}

const values = object => {
  if (!isObject(object)) {
    throw Error('must be an object');
  }

  const arr = [];

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      arr.push(object[key]);
    }
  }

  return arr;
}

module.exports = {
  forEachES6,
  forEach,
  isArray,
  isFunction,
  validation,
  isObject,
  keys,
  values
};

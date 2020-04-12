var bindValidation = function (obj) {
  if (typeof obj !== 'object') throw Error('context must be an object or null');
}

const bindES6 = (func, context, ...rest) => {
  bindValidation(context);
  return (...args) => func.apply(context, [...rest, ...args]);
}

var bind = function (func, context) {
  bindValidation(context);

  var bindedArguments = [].slice.call(arguments, 2);

  return function () {
    var args = [].slice.call(arguments);

    return func.apply(context, bindedArguments.concat(args));
  }
}

const add = function(a, b) {
  return this.a + this.b + a + b;
};

const mult = function(a, b) {
  return this.a * this.b * a * b;
};

const add1 = bindES6(add, {a:2, b:3}, 3);
const mult1 = bind(mult, {a:2, b:3}, 3);

console.log(add1(4));
console.log(mult1(4));
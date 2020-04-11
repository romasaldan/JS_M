const { validation } = require('./additionalFunctions');

const insertBefore = (arr, el, index) => [...arr.slice(0, index), el, ...arr.slice(index)];

const compareString = (a, b) => {
  if (String(a) > String(b)) {
    return 1;
  }

  return -1;
}

const insertSort = (array, callbackСomparison) => {
  let arr = [array[0]];

  for (let i = 1; i < array.length; i++) {
    inner: for (let j = i; j > 0; j--) {
      if (callbackСomparison(arr[i - j], array[i]) > 0) {
        arr = insertBefore(arr, array[i], i - j);
        break inner;
      }

      if ( j === 1) {
        arr = [...arr, array[i]]
      }
    }
  }

  return arr;
}

//there is a possibility to pass the third parameter to change algorithm of sorting or create logic in the function to
// change algorithm of sorting depending on length of array for example
const sort = (array, callback = compareString) => {
  validation(array);

  const originalLength = array.length;
  const copyOfArrayValues = array.filter(el => el !== undefined);
  const sortedArrayValues = insertSort(copyOfArrayValues, callback);

  array.splice(0, array.length, ...sortedArrayValues)

  return (array.length = originalLength, array);
}

const a = [10,3,6,2,, 4, 5,, 11];
const b = [
  {a:4},
  {a:3},
  {a:5}
];

console.log(sort(b, (a, b) => b.a - a.a));

console.log(sort(a, (a, b) => a - b))
console.log(sort(a))

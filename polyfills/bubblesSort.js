const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const el = array[j];

        array[j] = array[j + 1];
        array[j+1] = el;
      }
    }
  }

  return array;
}

console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]))
console.log(bubbleSort([1,4,5,3,2,2,6,3,2,2,2,1,2,-2,0,10,3,3,7,5]))
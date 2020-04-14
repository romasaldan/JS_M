const mergeTwoArrays = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    if (leftIndex === left.length) {
      result.push(right[rightIndex++]);
      continue;
    }

    if (rightIndex === right.length) {
      result.push(left[leftIndex++]);
      continue;
    }

    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex++]);
    } else {
      result.push(left[leftIndex++]);
    }
  }

  return result;
}

const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }

  const leftPart = array.slice(0, Math.floor(array.length/2));
  const rightPart = array.slice(Math.floor(array.length/2));

  return mergeTwoArrays(mergeSort(leftPart), mergeSort(rightPart));
}

console.log(mergeSort([1,4,5,3,2,2,6,3,2,2,2,1,2,-2,0,10,3,3,7,5]))
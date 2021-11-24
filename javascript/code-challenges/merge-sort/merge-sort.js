'use strict';
let x = 0;

function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);

    mergeSort(left);
    console.log('left', left, right, x);
    mergeSort(right);
    console.log('right', left, right, x);

    merge(left, right, arr);
    console.log('arr', arr, x);
  }
  x++;
  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
}

console.log(mergeSort([3, 2, 1]));

module.exports = mergeSort;

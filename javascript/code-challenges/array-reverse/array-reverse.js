const reverseArray = (arr) => {
  const newArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[j] = arr[i];
    j++;
  }
};

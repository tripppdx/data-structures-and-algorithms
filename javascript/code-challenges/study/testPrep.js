'use strict';

const { Stack } = require('../stack-and-queue/stack-and-queue');

function isAnagram(string1, string2) {
  let str1 = string1.split(' ').join('').toLowerCase();
  let str2 = string2.split(' ').join('').toLowerCase();
  let strMap = new Map();

  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (strMap.has(str1[i])) {
        let val = strMap.get(str1[i]);
        strMap.set(str1[i], val + 1);
      } else {
        strMap.set(str1[i], 1);
      }
    }
    for (let i = 0; i < str2.length; i++) {
      if (strMap.has(str2[i])) {
        if (strMap.get(str2[i]) > 1) {
          let count = strMap.get(str2[i]);
          strMap.set(str2[i], count - 1);
        } else {
          strMap.delete(str2[i]);
        }
      }
    }
    // console.log(strMap);
    if (strMap.size === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// let str1 = 'Eleven plus two';
// let str2 = 'Twelve plus one';

// let str1 = 'Software';
// let str2 = 'Swear';

let str1 = 'Astronomers';
let str2 = 'Moon starers';

// console.log(isAnagram(str1, str2));
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// function reverseString(str) {
//   let result = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     result.push(str[i]);
//   }
//   return result.join('');
// }

function reverseString(str) {
  let result = '';
  function helper(str) {
    if (str.length <= 0) {
      return;
    } else {
      let substring = str.slice(0, -1);
      result += str[str.length - 1];
      helper(substring);
      return result;
    }
  }
  return helper(str);
  // return result;
}

function replaceSpaces(url) {
  return url.split(' ').join('%20');
}

function replace2(url) {
  let i = 0;
  let str = '';
  while (i < url.length) {
    if (url[i] === ' ') {
      str = str + '%20';
    } else {
      str = str + url[i];
    }
    i++;
  }
  return str;
}

// console.log(reverseString(str2));

const needle = 8;

const closest = [1, 10, 7, 2, 4, 9].reduce((a, b) => {
  let aDiff = Math.abs(a - needle);
  let bDiff = Math.abs(b - needle);

  if (aDiff == bDiff) {
    // Choose largest vs smallest (> vs <)
    return a < b ? a : b;
  } else {
    return bDiff < aDiff ? b : a;
  }
});

function convertRoman(value) {
  {
    let result = '';
    let m = ['', 'M', 'MM', 'MMM'];
    let c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let x = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let i = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    let thousands = m[Math.floor(value / 1000)];
    let hundereds = c[Math.floor((value % 1000) / 100)];
    let tens = x[Math.floor((value % 100) / 10)];
    let ones = i[value % 10];
    console.log(ones);

    result = thousands + hundereds + tens + ones;

    return result;
  }
}

// console.log(closest);
// console.log(convertRoman(10021));

const conversion = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

function romanToInt(s) {
  let array = s.split('');

  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  for (let i = 0; i < array.length; i++) {
    current = array[i];
    currentValue = conversion[current];
    next = array[i + 1];
    nextValue = conversion[next];

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
}

function maxProduct(arr) {
  let result = 1;
  let count = 0;
  let negatives = 0;

  arr.sort((a, b) => {
    return Math.abs(b) - Math.abs(a);
  });
  console.log(arr);

  for (let i = 0; count < 3; i++) {
    if (arr[i] < 0) {
      negatives++;
      if (negatives < 3) {
        result = result * arr[i];
        console.log('xxx', arr[i]);
        count++;
      }
    } else if (arr[i] > 0) {
      result = result * arr[i];
      console.log(arr[i]);
      count++;
    }
  }
  return result;
}

// console.log(maxProduct([2, 3, -7, -9, -8]));

let data = [
  { st: 20, time: 2 },
  { st: 21, time: 2.1 },
  { st: 25, time: 2.2 },
  { st: 30, time: 3 },
  { st: 31, time: 3.1 },
];
let userSt = 40;
function findtime(us) {
  let time = 0;
  let diff = Math.abs(us - data[0].st);
  let mid = Math.floor(data.length / 2);
  console.log(diff, 'diff');
  if (us > data[mid].st) {
    while (data[mid]) {
      let k = Math.abs(data[mid].st - us);
      if (diff >= k) {
        diff = k;
        time = data[mid].time;
        console.log(time);
      }
      mid++;
    }
  } else if (us < data[mid].st) {
    let i = 0;
    while (i < mid) {
      let k = Math.abs(data[i].st - us);
      console.log(k, 'k');
      if (diff >= k) {
        diff = k;
        time = data[i].time;
        console.log(time);
      }
      i++;
    }
  }
  console.log(time);
}
// findtime(userSt);

let pile = new Stack();

pile.push({ origin: 'paris', destination: 'berlin' });
pile.push({ origin: 'seattle', destination: 'portland' });
pile.push({ origin: 'barcelona', destination: 'nice' });
pile.push({ origin: 'portland', destination: 'atlanta' });
pile.push({ origin: 'mumbai', destination: 'delhi' });
pile.push({ origin: 'los angeles', destination: 'san francisco' });
pile.push({ origin: 'rome', destination: 'lisbon' });
pile.push({ origin: 'madrid', destination: 'barcelona' });
pile.push({ origin: 'athens', destination: 'budapest' });
pile.push({ origin: 'jeddah', destination: 'riyadh' });
pile.push({ origin: 'atlanta', destination: 'amsterdam' });
pile.push({ origin: 'nice', destination: 'athens' });
pile.push({ origin: 'istanbul', destination: 'haifa' });
pile.push({ origin: 'amsterdam', destination: 'paris' });
pile.push({ origin: 'lisbon', destination: 'madrid' });
pile.push({ origin: 'haifa', destination: 'amman' });
pile.push({ origin: 'budapest', destination: 'istanbul' });
pile.push({ origin: 'colombo', destination: 'kuala lumpur' });
pile.push({ origin: 'amman', destination: 'jeddah' });
pile.push({ origin: 'riyadh', destination: 'dammam' });
pile.push({ origin: 'bangkok', destination: 'tokyo' });
pile.push({ origin: 'san francisco', destination: 'seattle' });
pile.push({ origin: 'dammam', destination: 'dubai' });
pile.push({ origin: 'delhi', destination: 'colombo' });
pile.push({ origin: 'singapore', destination: 'bangkok' });
pile.push({ origin: 'kuala lumpur', destination: 'singapore' });
pile.push({ origin: 'prague', destination: 'rome' });
pile.push({ origin: 'dubai', destination: 'mumbai' });
pile.push({ origin: 'berlin', destination: 'prague' });

// function reorderStack2(pile) {
//   let ticketArr = [];
//   while (pile.top) {
//     ticketArr.push(pile.pop());
//   }
//   ticketArr.sort((a, b) => {
//     if (a.destination === b.origin) {
//       return -1;
//     }
//   });
//   for (let i = ticketArr.length - 1; i >= 0; i--) {
//     pile.push(ticketArr[i]);
//   }
//   return pile;
// }

const display = pile => {
  let tmp = [];
  while (pile.top) {
    tmp.push(pile.pop());
  }
  console.log(tmp);
};
// display(pile);

function reorderStack(pile) {
  let originMap = new Map();
  let ticketArray = [];
  let stackDepth = 0;

  while (pile.top) {
    let tmp = pile.pop();
    ticketArray.push(tmp);
    originMap.set(tmp.origin, tmp);
  }

  for (let i = 0; i < ticketArray.length; i++) {
    if (!originMap.has(ticketArray[i].destination)) {
      pile.push(ticketArray[i]);
      stackDepth++;
    }
  }

  while (stackDepth < ticketArray.length) {
    for (let i = 0; i < ticketArray.length; i++) {
      if (ticketArray[i].destination === pile.peek().origin) {
        pile.push(ticketArray[i]);
        stackDepth++;
      }
    }
  }
  return pile;
}

display(reorderStack(pile));

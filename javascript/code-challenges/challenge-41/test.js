'use strict';

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
      return result;
    } else {
      let substring = str.slice(0, -1);
      result += str[str.length - 1];
      helper(substring);
    }
  }
  helper(str);
  return result;
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

console.log(reverseString(str2));

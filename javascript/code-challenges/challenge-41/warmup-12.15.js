'use strict';

// const hasSubstring = (string1, string2) => {
//   let substring = '';
//   let shorterString, longerString;
//   if (string1.length < string2.length) {
//     shorterString = string1;
//     longerString = string2;
//   } else {
//     shorterString = string2;
//     longerString = string1;
//   }
//   let index = null;
//   for (let i = 0; i < shorterString.length; i++) {
//     let chars = shorterString[i];
//     if (index === null) {
//       if (longerString.includes(chars)) {
//         // find index in longer string
//         index = longerString.indexOf(char);

//         //
//         substring += shorterString.charAt(i);
//       } else {
//         if (shorterString[index] === longerString[index]) {
//         }
//       }
//     }
//   }
//   return substring;
// };


function getShortestString(string1, string2) {
  let shorterString;
  if (string1.length < string2.length) {
    shorterString = string1;
  } else {
    shorterString = string2;
  }
  return shorterString;
}

function getShortestStringInAShorterWay(s1, s2) {
  return s1.length < s2.length ? s1 : s2;
}



const hasSubstring = (string1, string2) => {
  let substring = '';
  let shorterString, longerString;
  if (string1.length < string2.length) {
    shorterString = string1;
    longerString = string2;
  } else {
    shorterString = string2;
    longerString = string1;
  }
  for (let i = 0; i < shorterString.length; i++) {
    let nextsubstring = substring + shorterString[i];
    if (!longerString.includes(shorterString[i])) {
      substring = shorterString[i];
    } else if(longerString.includes(substring)) {
      // find index in longerstring and add to substring.
      substring += 
    }
    
  }
  return substring;
};


let str1 = 'bologna';
let srr2 = 'technology'

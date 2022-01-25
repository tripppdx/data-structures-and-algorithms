const HashTable = require('../hashtable/hashtable');

function isAnagram(string1, string2) {
  const str1 = string1
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .replace(/\s/g, '');
  const str2 = string2
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .replace(/\s/g, '');
  console.log(str1);
  console.log(str2);
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram('Eleven plus two', 'Twelve plus one'));

const HashTable = require('../hashtable/hashtable');

function leftJoin(map1, map2) {
  let result = [];
  map1.map.forEach(key => {
    // console.log(key.values());
    result.push(key.values());
  });

  return result;
}

const synonyms = new HashTable(1024);
const antonyms = new HashTable(1024);

synonyms.add('fond', 'enamored');
synonyms.add('wrath', 'anger');
synonyms.add('diligent', 'employed');
synonyms.add('outfit', 'garb');
synonyms.add('guide', 'usher');

antonyms.add('fond', 'averse');
antonyms.add('wrath', 'delight');
antonyms.add('diligent', 'idle');
antonyms.add('guide', 'follow');
antonyms.add('flow', 'jam');

console.log(leftJoin(synonyms, antonyms));

module.exports = leftJoin;

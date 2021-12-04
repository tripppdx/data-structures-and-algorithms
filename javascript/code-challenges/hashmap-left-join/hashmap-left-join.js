const HashTable = require('../hashtable/hashtable');
// const { LinkedList, Node } = require('../linked-list/linked-list');

function leftJoin(map1, map2) {
  let result = [];
  let tmp = [];
  map1.map.forEach(key => {
    tmp.push(key.values());
  });
  for (let i = 0; i < tmp.length; i++) {
    result.push(Object.entries(tmp[i][0]));
    if (map2.contains(result[i][0][0])) {
      result[i][0].push(map2.get(result[i][0][0]));
    } else result[i][0].push(null);
  }
  return result.flat();
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

// function reverseLinkedList(head) {
//   console.log('head', head);
//   if (!head || !head.next) {
//     return head;
//   }
//   let tmp = reverseLinkedList(head.next);
//   console.log('tmp', tmp);
//   // head.next.next, head.next);
//   head.next.next = head;
//   head.next = null;
//   return tmp;
// }

// const list = new LinkedList();

// list.head = new Node(1);
// list.head.next = new Node(3);
// list.head.next.next = new Node(5);
// list.head.next.next.next = new Node(7);

// console.log(reverseLinkedList(list.head));
module.exports = leftJoin;

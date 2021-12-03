const { BinarySearchTree, Node } = require('../trees/trees');
const HashTable = require('../hashtable/hashtable');

function treeIntersection(t1, t2) {
  const table = new HashTable(1024);
  const result = [];
  let temp1 = t1.inOrder(t1.root);
  let temp2 = t2.inOrder(t2.root);

  for (let i = 0; i < temp1.length; i++) {
    table.add(temp1[i].toString(), temp1[i]);
  }
  for (let j = 0; j < temp2.length; j++) {
    let key = temp2[j];
    if (table.contains(key.toString())) {
      result.push(key);
    }
  }
  return result;
}

const tree1 = new BinarySearchTree();
const tree2 = new BinarySearchTree();

tree1.root = new Node(150);
tree1.add(100);
tree1.add(250);
tree1.add(75);
tree1.add(160);
tree1.add(200);
tree1.add(350);
tree1.add(125);
tree1.add(175);
tree1.add(300);
tree1.add(500);

tree2.root = new Node(42);
tree2.add(100);
tree2.add(600);
tree2.add(15);
tree2.add(160);
tree2.add(200);
tree2.add(350);
tree2.add(125);
tree2.add(175);
tree2.add(4);
tree2.add(500);

// console.log(tree1);
// console.log(tree2);

console.log(treeIntersection(tree1, tree2));

module.exports = treeIntersection;

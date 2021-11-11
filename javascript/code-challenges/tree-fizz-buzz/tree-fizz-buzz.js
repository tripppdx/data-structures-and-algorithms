'use strict';

class Node {
  constructor(value, k = 0) {
    this.value = value;
    this.children = new Array(k);
    [undefined, undefined];
  }
}

class KaryTree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }
}

function breadthFirst(root) {
  // have a place to store current children
  const queue = [];
  const output = [];
  let current = root;

  queue.unshift(root);
  while (queue.length) {
    // take a node off the queue
    current = queue.pop();

    // read it's value
    output.push(current.value);

    // push all children into queue.
    for (let node of current.children) {
      queue.unshift(node);
    }
  }
  return output;
}

function fizzBuzzTree(karyTree) {
  const queue = [];

  let current = karyTree.root;
  queue.unshift(current);
  while (queue.length) {
    current = queue.pop();
    if (current.value % 3 === 0 && current.value % 5 === 0) {
      current.value = 'FizzBuzz';
    } else if (current.value % 3 === 0) {
      current.value = 'Fizz';
    } else if (current.value % 5 === 0) {
      current.value = 'Buzz';
    } else {
      current.value = current.value.toString();
    }
    for (let node of current.children) {
      queue.unshift(node);
    }
  }
}

let kary = new KaryTree(2);

kary.root = new Node(10);
kary.root.children.push(new Node(13), new Node(2));
kary.root.children[0].children.push(new Node(23));
kary.root.children[0].children[0].children.push(new Node(25), new Node(50));
kary.root.children[1].children.push(new Node(45));
kary.root.children[1].children[0].children.push(new Node(3));
kary.root.children[1].children[0].children[0].children.push(new Node(7));

console.log(breadthFirst(kary.root));
// console.log(JSON.stringify(kary));
fizzBuzzTree(kary);
console.log(breadthFirst(kary.root));

module.exports = { Node, KaryTree, breadthFirst, fizzBuzzTree };

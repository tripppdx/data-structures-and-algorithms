'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder(current) {
    console.log(current.value);
    if (current.left) {
      this.preOrder(current.left);
    }
    if (current.right) {
      this.preOrder(current.right);
    }
  }

  inOrder(current) {
    if (current.left) {
      this.inOrder(current.left);
    }
    console.log(current.value);
    if (current.right) {
      this.inOrder(current.right);
    }
  }

  postOrder(current) {
    if (current.left) {
      this.postOrder(current.left);
    }
    if (current.right) {
      this.postOrder(current.right);
    }
    console.log(current.value);
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  // add value to BST
  add(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return 'Value already in tree';
      } else if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value);
          return 'success';
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(value);
          return 'success';
        } else {
          current = current.right;
        }
      }
    }
  }

  // BST contains value
  contains(value) {
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (found) {
      return true;
    } else {
      return false;
    }
  }
}

let tree = new BinarySearchTree();

tree.root = new Node(15);
tree.root.left = new Node(10);
tree.root.left.left = new Node(7);
tree.root.left.right = new Node(13);
tree.root.left.left.left = new Node(5);
tree.root.left.left.right = new Node(9);
tree.root.right = new Node(25);
tree.root.right.left = new Node(22);
tree.root.right.right = new Node(27);
tree.root.right.left.left = new Node(17);

// console.log('Pre Order:');
// tree.preOrder(tree.root);
// console.log('**********');
// console.log('In Order:');
// tree.inOrder(tree.root);
// console.log('**********');
// console.log('Post Order:');
// tree.postOrder(tree.root);

console.log(tree.contains(5));
console.log(tree.contains(17));
console.log(tree.add(3));
tree.preOrder(tree.root);

module.exports = { Node, BinaryTree, BinarySearchTree };

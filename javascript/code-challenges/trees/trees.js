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
  add(value) {}
  contains(value) {}
}

module.exports = { Node, BinaryTree, BinarySearchTree };

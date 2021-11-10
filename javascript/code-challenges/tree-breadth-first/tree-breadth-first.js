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

  preOrder() {
    const arr = [];
    function traverse(current) {
      arr.push(current.value);
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
    }
    console.log('foo');
    traverse(this.root);
    return arr;
  }

  inOrder() {
    const arr = [];
    function traverse(current) {
      if (current.left) {
        traverse(current.left);
      }
      arr.push(current.value);
      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(this.root);
    return arr;
  }

  postOrder() {
    const arr = [];
    function traverse(current) {
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
      arr.push(current.value);
    }
    traverse(this.root);
    return arr;
  }

  // find maximum node value in binary tree
  findMaxValue() {
    function findMax(current) {
      if (!current) {
        return 'Empty tree';
      } else {
        let max = current.value;

        if (findMax(current.left) > max) {
          max = findMax(current.left);
        }
        if (findMax(current.right) > max) {
          max = findMax(current.right);
        }
        return max;
      }
    }
    return findMax(this.root);
  }

  // Breadth first traversal
  breadthFirst() {
    let current = this.root;
    let queue = [];
    let visited = [];

    queue.push(current);

    if (!current) {
      return 'Empty tree';
    }

    while (queue.length) {
      current = queue.shift();
      visited.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
    return visited;
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

// let tree = new BinarySearchTree();

// tree.root = new Node(15);
// tree.root.left = new Node(10);
// tree.root.left.left = new Node(7);
// tree.root.left.right = new Node(13);
// tree.root.left.left.left = new Node(5);
// tree.root.left.left.right = new Node(9);
// tree.root.right = new Node(25);
// tree.root.right.left = new Node(22);
// tree.root.right.right = new Node(27);
// tree.root.right.left.left = new Node(17);

// console.log(tree.breadthFirst());

module.exports = { Node, BinaryTree, BinarySearchTree };

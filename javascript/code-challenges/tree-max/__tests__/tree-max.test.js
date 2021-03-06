'use strict';

const { Node, BinaryTree } = require('../tree-max.js');

describe('Binary tree tests', () => {
  const tree = new BinaryTree();
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

  test('Can successfully return maximum node value in binary tree', () => {
    expect(tree.findMaxValue()).toEqual(27);
  });

  test('Raises an error if tree is empty', () => {
    const tree = new BinaryTree();
    expect(tree.findMaxValue()).toEqual('Empty tree');
  });
});

'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../trees.js');

describe('Binary tree tests', () => {
  test('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toEqual(null);
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(15);
    expect(tree.root.value).toEqual(15);
  });

  test('Can successfully add a left child and right child to a single root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(10);
    tree.root.right = new Node(25);
    expect(tree.root.value).toEqual(15);
    expect(tree.root.left.value).toEqual(10);
    expect(tree.root.right.value).toEqual(25);
  });

  const tree = new BinarySearchTree();
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

  test('Can successfully return a collection from a preorder traversal', () => {
    expect(tree.preOrder()).toEqual([15, 10, 7, 5, 9, 13, 25, 22, 17, 27]);
  });

  test('Can successfully return a collection from an inorder traversal', () => {
    expect(tree.inOrder()).toEqual([5, 7, 9, 10, 13, 15, 17, 22, 25, 27]);
  });

  test('Can successfully return a collection from a postorder traversal', () => {
    expect(tree.postOrder()).toEqual([5, 9, 7, 13, 10, 17, 22, 27, 25, 15]);
  });
});

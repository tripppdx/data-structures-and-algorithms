'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../trees.js');

describe('Tests binary tree, binary tree search,', () => {
  const tree = new BinaryTree();
  test('Can successfully instantiate an empty tree', () => {
    expect(tree.root).toEqual(null);
  });

  test('Can successfully instantiate a tree with a single root node', () => {});

  test('Can successfully add a left child and right child to a single root node', () => {});

  test('Can successfully return a collection from a preorder traversal', () => {});

  test('Can successfully return a collection from an inorder traversal', () => {});

  test('Can successfully return a collection from a postorder traversal', () => {});
});

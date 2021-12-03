'use strict';

const { BinarySearchTree, Node } = require('../../trees/trees');
const treeIntersection = require('../tree-intersection');

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

describe('Binary tree intersection test', () => {
  test('Should find common values in two binary trees', () => {
    expect(treeIntersection(tree1, tree2)).toEqual([
      100, 125, 160, 175, 200, 350, 500,
    ]);
  });
});

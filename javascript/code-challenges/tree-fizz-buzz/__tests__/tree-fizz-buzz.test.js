'use strict';

const {
  Node,
  KaryTree,
  breadthFirst,
  fizzBuzzTree,
} = require('../tree-fizz-buzz.js');

describe('K-ary tree fizz-buzz tests', () => {
  test('Can successfully create new Fizz-Buzz tree', () => {
    let kary = new KaryTree(2);
    kary.root = new Node(10);
    kary.root.children.push(new Node(13), new Node(2));
    kary.root.children[0].children.push(new Node(23));
    kary.root.children[0].children[0].children.push(new Node(25), new Node(50));
    kary.root.children[1].children.push(new Node(45));
    kary.root.children[1].children[0].children.push(new Node(3));
    kary.root.children[1].children[0].children[0].children.push(new Node(7));
    fizzBuzzTree(kary);
    expect(breadthFirst(kary.root)).toEqual([
      'Buzz',
      '13',
      '2',
      '23',
      'FizzBuzz',
      'Buzz',
      'Buzz',
      'Fizz',
      '7',
    ]);
  });
});

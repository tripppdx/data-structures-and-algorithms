'use strict';

const { LinkedList, Node } = require('../linked-list-kth');

describe('Linked list tests', () => {
  const list = new LinkedList();
  list.head = new Node(1);
  list.head.next = new Node(2);
  list.head.next.next = new Node(3);

  test('Where k is greater than the length of the linked list', () => {
    expect(list.kthFromEnd(4)).toEqual('Invalid argument');
  });

  test('Where k and the length of the list are the same', () => {
    expect(list.kthFromEnd(3)).toEqual('Invalid argument');
  });

  test('Where k is not a positive integer', () => {
    expect(list.kthFromEnd(-3)).toEqual('Invalid argument');
  });

  test('Where the linked list is of a size 1', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    expect(list.kthFromEnd(1)).toEqual('Invalid argument');
  });

  test('where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    expect(list.kthFromEnd(1)).toEqual(2);
  });
});

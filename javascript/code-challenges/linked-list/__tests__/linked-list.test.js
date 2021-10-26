'use strict';

const { LinkedList, Node } = require('../linked-list');

describe('Linked list tests', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toEqual(null);
  });
  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    expect(list.head.value).toEqual(1);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 3; i++) {
      list.insert(i);
    }
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 3; i++) {
      list.insert(i);
    }
    expect(list.includes(2)).toEqual(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 3; i++) {
      list.insert(i);
    }
    expect(list.includes(4)).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    for (let i = 1; i <= 3; i++) {
      list.insert(i);
    }
    expect(list.toString()).toEqual('{3} -> {2} -> {1} -> NULL');
  });
});

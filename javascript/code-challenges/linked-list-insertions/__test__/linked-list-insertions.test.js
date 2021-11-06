'use strict';

const { LinkedList, Node } = require('../linked-list-insertions');

describe('Linked list tests', () => {
  const list = new LinkedList();
  list.head = new Node(1);

  test('Can successfully add a node to the end of the linked list', () => {
    list.append(2);
    expect(list.toString()).toEqual('{1} -> {2} -> NULL');
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    list.append(3);
    list.append(4);
    expect(list.toString()).toEqual('{1} -> {2} -> {3} -> {4} -> NULL');
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    list.insertBefore(3, 'a');
    expect(list.toString()).toEqual('{1} -> {2} -> {a} -> {3} -> {4} -> NULL');
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    list.insertBefore(1, 'b');
    expect(list.head.value).toEqual('b');
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    list.insertAfter(3, 'c');
    expect(list.toString()).toEqual(
      '{b} -> {1} -> {2} -> {a} -> {3} -> {c} -> {4} -> NULL'
    );
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    list.insertAfter(4, 'd');
    expect(list.toString()).toEqual(
      '{b} -> {1} -> {2} -> {a} -> {3} -> {c} -> {4} -> {d} -> NULL'
    );
  });
});

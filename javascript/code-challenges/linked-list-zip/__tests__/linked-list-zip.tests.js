'use strict';

const { LinkedList, Node, zipLists } = require('../linked-list-zip');

describe('Linked list tests', () => {
  test('Where list1 is empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list2.head = new Node(2);
    list2.head.next = new Node(4);
    list2.head.next.next = new Node(5);
    expect(zipLists(list1, list2)).toEqual('Cannot zip empty list');
  });

  test('Where list 2 is empty', () => {
    const list1 = new LinkedList();
    list1.head = new Node(1);
    list1.head.next = new Node(3);
    list1.head.next.next = new Node(5);
    const list2 = new LinkedList();
    expect(zipLists(list1, list2)).toEqual('Cannot zip empty list');
  });

  test('Where list1 is {1} -> {3} -> {2} -> NULL and list2 is {5} -> {9} -> {4} -> NULL', () => {
    const list1 = new LinkedList();
    list1.head = new Node(1);
    list1.head.next = new Node(3);
    list1.head.next.next = new Node(2);
    const list2 = new LinkedList();
    list2.head = new Node(5);
    list2.head.next = new Node(9);
    list2.head.next.next = new Node(4);
    expect(zipLists(list1, list2).toString()).toEqual(
      '{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> NULL'
    );
  });
  test('Where list1 is {1} -> {3} -> NULL and list2 is {5} -> {9} -> {4} -> NULL', () => {
    const list1 = new LinkedList();
    list1.head = new Node(1);
    list1.head.next = new Node(3);
    const list2 = new LinkedList();
    list2.head = new Node(5);
    list2.head.next = new Node(9);
    list2.head.next.next = new Node(4);
    expect(zipLists(list1, list2).toString()).toEqual(
      '{1} -> {5} -> {3} -> {9} -> {4} -> NULL'
    );
  });
  test('Where list1 is {1} -> {3} -> {2} -> NULL and list2 is {5} -> {9} -> NULL', () => {
    const list1 = new LinkedList();
    list1.head = new Node(1);
    list1.head.next = new Node(3);
    list1.head.next.next = new Node(2);
    const list2 = new LinkedList();
    list2.head = new Node(5);
    list2.head.next = new Node(9);
    expect(zipLists(list1, list2).toString()).toEqual(
      '{1} -> {5} -> {3} -> {9} -> {2} -> NULL'
    );
  });
});

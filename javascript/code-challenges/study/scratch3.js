'use strict';

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let list = new LinkedList();

list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = new Node(30);
list.head.next.next.next = new Node(40);
// list.head.next.next.next.next = list.head.next.next.next;

function isCircular(list) {
  if (list.head === null) return true;

  let current = list.head.next;

  while (current !== null && current !== list.head) {
    current = current.next;
    if (current === null) {
      return false;
    } else if (current === list.head) {
      return true;
    }
  }
}

function isCircular2(list) {
  let map = new Map();
  let current = list.head;
  while (current.next) {
    if (map.has(current.value)) {
      let val = map.get(current.value);
      if (val === current.next.value) {
        return true;
      }
    }
    map.set(current.value, current.next.value);
    current = current.next;
  }
  return false;
}

console.log(isCircular2(list));

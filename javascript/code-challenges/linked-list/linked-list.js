'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverseIterative() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // insert a value onto the end of he linked list.
  insert(value) {
    let current = this.head;
    let newNode = new Node(value);
    if (current) {
      newNode.next = current;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
  }

  // search to see if there is a value contained, and return true or false
  includes(value) {
    let current = this.head;
    while (current) {
      if (value === current.value) {
        return true;
      } else if (current.next === null) {
        return false;
      } else {
        current = current.next;
      }
    }
  }

  // returns all the values as a string.
  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{${current.value}} -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }
}

// const list = new LinkedList();

// list.head = new Node(10);
// list.head.next = new Node(25);
// list.head.next.next = new Node(2);
// list.head.next.next.next = new Node(13);

module.exports = {
  LinkedList: LinkedList,
  Node: Node,
};

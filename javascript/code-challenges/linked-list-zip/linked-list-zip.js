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
      console.log(current.value, current.next);
      current = current.next;
    }
  }

  // insert a value into the beginning of the linked list.
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
    return (string += 'NULL');
  }

  // adds a new node with the given value to the end of the list
  append(value) {
    let current = this.head;
    while (current) {
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
  }

  // adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current;
        if (previous) {
          previous.next = newNode;
        } else {
          this.head = newNode;
        }
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  // adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  // Return the node’s value that is k places from the tail of the linked list
  kthFromEnd(k) {
    let current = this.head;
    const arr = [];

    if (k >= 0) {
      while (current) {
        arr.push(current.value);
        current = current.next;
      }
      if (k >= arr.length) {
        return 'Invalid argument';
      } else {
        return arr[arr.length - k - 1];
      }
    } else {
      return 'Invalid argument';
    }
  }
}

//Zip two linked lists
function zipLists(list1, list2) {
  if (list1.head && list2.head) {
    let list = list1;
    let currentA = list.head;
    let currentB = list2.head;

    while (currentA && currentB) {
      let tmp = currentA.next;
      currentA.next = currentB;
      currentB = tmp;
      currentA = currentA.next;
    }
    return list;
  } else {
    return 'Cannot zip empty list';
  }
}

module.exports = {
  LinkedList,
  Node,
  zipLists,
};

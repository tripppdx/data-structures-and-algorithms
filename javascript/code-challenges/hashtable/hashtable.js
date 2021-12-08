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
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  // assume key is a string
  hash(key) {
    let sum = 0;
    // loop through the string
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return (sum * 599) % this.size;
  }

  add(key, value) {
    // hash the key to get the position
    let index = this.hash(key);
    // console.log(index);

    // look at that buckets value
    let bucket = this.map[index];
    let payload = {
      [key]: value,
    };

    // if there is something there we can assume it's alinked list and append
    if (bucket) {
      bucket.append(payload);
    } else {
      // if nothing is there, let instantiate a new Linked list and add that to our bucket at our index value.
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  // returns a boolean whether or not something is there.
  contains(key) {
    const index = this.hash(key);
    if (this.map[index]) {
      const values = this.map[index].values();
      for (let i = 0; i < values.length; i++) {
        if (Object.keys(values[i]).includes(key)) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }
  // takes in a key, and returns the value or null if nothing found
  get(key) {
    if (this.contains(key)) {
      const index = this.hash(key);
      // return this.map[index].head.value;
      const values = this.map[index].values();
      console.log(values);
      for (let i = 0; i < values.length; i++) {
        if (Object.keys(values[i]).includes(key)) {
          return values[i][key];
        }
      }
      return null;
    } else {
      return null;
    }
  }
}

let table = new HashTable(1024);
console.log(table.hash('Jacob'));
table.add('Jacob', 'instructor');
table.add('cobJa', 'foo');
// table.add('Jacob', 'instructor');

// table.add('Roop', 'student');
// console.log(table.map[201]);
// console.log(table.contains('Harvey'));
// console.log(JSON.stringify(table.map));
table.get('Jacob');

module.exports = HashTable;

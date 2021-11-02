'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let previousTop = this.top;
    let nodeToAdd = new Node(value);
    nodeToAdd.next = previousTop;
    this.top = nodeToAdd;
  }

  pop() {
    if (this.top !== null) {
      let temp = this.top;
      this.top = temp.next;
      return temp.value;
    } else {
      return 'Empty stack';
    }
  }

  peek() {
    if (this.top !== null) {
      return this.top.value;
    } else {
      return 'Empty stack';
    }
  }
}

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }

  enqueue(value) {
    this.rear.push(value);
  }

  dequeue() {
    if (this.front.top === null) {
      if (this.rear.top === null) {
        return 'Empty queue';
      } else {
        while (this.rear.top !== null) {
          this.front.push(this.rear.pop());
        }
      }
    }
    return this.front.pop();
  }
}

const pQ = new PseudoQueue();
pQ.enqueue(10);
pQ.enqueue(15);
pQ.enqueue(20);

console.log(JSON.stringify(pQ));
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());

console.log(JSON.stringify(pQ));

module.exports = {
  PseudoQueue,
};

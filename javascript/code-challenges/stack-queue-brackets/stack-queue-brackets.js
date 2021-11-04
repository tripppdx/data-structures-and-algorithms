'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; // the first
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

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

function validateBrackets(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      const bracket = stack.peek();
      if (
        (bracket === '(' && str[i] === ')') ||
        (bracket === '[' && str[i] === ']') ||
        (bracket === '{' && str[i] === '}')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

module.exports = validateBrackets;

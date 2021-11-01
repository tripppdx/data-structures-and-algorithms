'use strict';

const { Stack, Queue } = require('../stack-and-queue');

describe('Stack and Queue Tests', () => {
  test('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });
  test('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    for (let i = 1; i <= 3; i++) {
      stack.push(i);
    }
    // console.log(JSON.stringify(stack));
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });
  test('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });
  test('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    for (let i = 1; i <= 3; i++) {
      stack.push(i);
    }
    for (let i = 1; i <= 3; i++) {
      stack.pop();
    }
    expect(stack.isEmpty()).toBe(true);
  });
  test('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  test('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toBe(null);
  });
  test('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(stack.pop()).toEqual('Empty stack');
    expect(stack.peek()).toEqual('Empty stack');
  });
  test('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    for (let i = 1; i <= 3; i++) {
      queue.enqueue(i);
    }
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });
  test('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    for (let i = 1; i <= 3; i++) {
      queue.enqueue(i);
    }
    for (let i = 1; i <= 3; i++) {
      queue.dequeue();
    }
    expect(queue.isEmpty()).toBe(true);
  });
  test('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toBe(null);
  });
  test('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toEqual('Empty queue');
    expect(queue.peek()).toEqual('Empty queue');
  });
});

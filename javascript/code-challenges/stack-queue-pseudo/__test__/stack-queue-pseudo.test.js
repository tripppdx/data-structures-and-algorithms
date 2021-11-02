'use strict';

const { PseudoQueue } = require('../stack-queue-pseudo.js');

describe('Pseudo-Queue Tests', () => {
  test('Can successfully enqueue into a queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new PseudoQueue();
    for (let i = 1; i <= 3; i++) {
      queue.enqueue(i);
    }
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new PseudoQueue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new PseudoQueue();
    for (let i = 1; i <= 3; i++) {
      queue.enqueue(i);
    }
    for (let i = 1; i <= 3; i++) {
      queue.dequeue();
    }
    expect(queue.front.top).toBe(null);
    expect(queue.rear.top).toBe(null);
  });
  test('Can successfully instantiate an empty queue', () => {
    const queue = new PseudoQueue();
    expect(queue.front.top).toBe(null);
    expect(queue.rear.top).toBe(null);
  });
  test('Calling dequeue on empty queue raises exception', () => {
    const queue = new PseudoQueue();
    expect(queue.dequeue()).toEqual('Empty queue');
  });
});

# Stacks and Queues

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Challenge

- Can successfully push onto a stack
- Can successfully push multiple values onto a stack
- Can successfully pop off the stack
- Can successfully empty a stack after multiple pops
- Can successfully peek the next item on the stack
- Can successfully instantiate an empty stack
- Calling pop or peek on empty stack raises exception
- Can successfully enqueue into a queue
- Can successfully enqueue multiple values into a queue
- Can successfully dequeue out of a queue the expected value
- Can successfully peek into a queue, seeing the expected value
- Can successfully empty a queue after multiple dequeues
- Can successfully instantiate an empty queue
- Calling dequeue or peek on empty queue raises exception

## Approach & Efficiency

Big O time complexity:

`stack.push()` - O(1)
`stack.pop()` - O(1)
`stack.peek()` - O(1)
`stack.isEmpty()` - O(1)
`queue.enqueue()` - O(1)
`queue.dequeue()` - O(1)
`queue.peek()` - O(1)
`queue.isEmpty()` - O(1)

## API

`stack.push(value)`

- Arguments: value
- Adds a new node with that value to the top of the stack with an O(1) Time performance.

`stack.pop()`

- Arguments: none
- Returns: the value from node from the top of the stack
- Removes the node from the top of the stack
- Should raise exception when called on empty stack

`stack.peek()`

- Arguments: none
- Returns: Value of the node located at the top of the stack
- Should raise exception when called on empty stack

`stack.isEmpty()`

- Arguments: none
- Returns: Boolean indicating whether or not the stack is empty.

`queue.enqueue(value)`

- Arguments: value
- Adds a new node with that value to the back of the queue with an O(1) Time performance.

`queue.dequeue()`

- Arguments: none
- Returns: the value from node from the front of the queue
- Removes the node from the front of the queue
- Should raise exception when called on empty queue

`queue.peek()`

- Arguments: none
- Returns: Value of the node located at the front of the queue
- Should raise exception when called on empty stack

`queue.isEmpty()`

- Arguments: none
- Returns: Boolean indicating whether or not the queue is empty

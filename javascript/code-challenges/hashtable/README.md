# Stacks and Queues

Create a Binary Tree class. Define methods for each of the depth-first traversals:

- Pre order
- In order
- Post order

Create a Binary Search Tree Class. This class should be a sub-class of the Binary Tree Class, with the following additional methods:

- Add: Adds a new node in the correct location in the binary search tree
- Contains: Indicates whether or not a value is in the tree at least once

## Challenge

- Can successfully instantiate an empty tree
- Can successfully instantiate a tree with a single root node
- Can successfully add a left child and right child to a single root node
- Can successfully return a collection from a preorder traversal
- Can successfully return a collection from an inorder traversal
- Can successfully return a collection from a postorder traversal

## Approach & Efficiency

Big O time complexity:

`tree.preOrder()` - O(n)
`tree.inOrder()` - O(n)
`tree.postOrder()` - O(n)
`tree.add(value)` - O(log n)
`tree.contains(value)` - O(log n)

## API

`tree.preOrder()`

- Returns: an array of the values, ordered appropriately.

`tree.inOrder()`

- Returns: an array of the values, ordered appropriately.

`tree.postOrder()`

- Returns: an array of the values, ordered appropriately.

`tree.add(value)`

- Arguments: value
- Adds a new node with that value in the correct location in the binary search tree.

`tree.contains(value)`

- Argument: value
- Returns: boolean indicating whether or not the value is in the tree at least once.

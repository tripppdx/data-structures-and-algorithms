# tree-max

Code Challenge - Class 16: Tree Max

## Challenge

Extend the binary tree implementation by adding a method that finds the Maximum Value in a Binary Tree

```javascript
tree.findMaxValue();
```

## Whiteboard Process

![tree-max](./tree-max.png)

## Approach & Efficiency

Big O time complexity

`tree.findMaxValue();` : O(n)

## Solution

Use recursion to traverse the entire tree. For every node, return the greater of either the current node value, the left node value, or the right node value.

```javascript
tree.findMaxValue();
```

```plaintext
- Arguments: none
- Returns: number
```

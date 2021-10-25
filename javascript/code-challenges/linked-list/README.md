# Singly Linked List

Code Challenge: Class 05: Linked List Implementation

## Challenge

Implement a `Linked List` class in JavaScript. The class should contain three methods:

```javascript
list.insert(value);
list.includes(value);
list.toString();
```

## Approach & Efficiency

Iterative approach.

Big O: O(1)

## API

### Methods

```javascript
list.insert(value);
```

```plaintext
- Arguments: value
- Returns: nothing
- Adds a new node with that value to the head of the list with an O(1) Time performance.
```

```javascript
list.includes(value);
```

```plaintext
- Arguments: value
- Returns: Boolean
- Indicates whether that value exists as a Node’s value somewhere within the list.
```

```javascript
list.toString();
```

```plaintext
- Arguments: none
- Returns: a string representing all the values in the Linked List, formatted as:
  `{ a } -> { b } -> { c } -> NULL`
```

## Visual

![linked list](./linked-list.png)

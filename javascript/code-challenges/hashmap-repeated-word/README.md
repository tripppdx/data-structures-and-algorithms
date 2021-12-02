# Hashmap Repeated Word

Write a function called repeated word that finds the first word to occur more than once in a string

- `add(key, value)`

  This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

- `get(key)`

  This method should retrieve the value associated with a key in the table.

- `contains(key)`

  This method should indicate if a key exists in the table.

- `hash(key)`

  This method should generate an index for a given key

## Challenge

- Adding a key/value to your hashtable results in the value being in the data structure
- Retrieving based on a key returns the value stored
- Successfully returns null for a key that does not exist in the hashtable
- Successfully handle a collision within the hashtable
- Successfully retrieve a value from a bucket within the hashtable that has a collision
- Successfully hash a key to an in-range value

## Approach & Efficiency

Big O time complexity:

`table.add(key, value)` - O(1)
`table.get(key)` - O(1) [no collisions]
`table.contains(key)` - O(1) [no collisions]
`table.hash(key)` - O(1)

## API

`table.add(key, value)` - O(n)

- Arguments: key, value
- Returns: nothing

`table.get(key)` - O(n)

- Arguments: key
- Returns: Value associated with that key in the table

`table.contains(key)` - O(n)

- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.

`table.hash(key)` - O(log n)

- Arguments: key
- Returns: Index in the collection for that key

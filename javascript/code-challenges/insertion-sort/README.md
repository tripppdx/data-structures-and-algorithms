# insertion-sort

Code Challenge - Class 26: Insertion Sort

## Challenge

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

### Pseudocode

```plaintext
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

### Sample Array

`[8,4,23,42,16,15]`

## Blog Post

[Insertion Sort Blog Post](https://github.com/tripppdx/data-structures-and-algorithms/blob/main/javascript/code-challenges/insertion-sort/BLOG.md)

## Whiteboard Process

![insertion-sort](./insertion-sort.png)

## Approach & Efficiency

### Big O time complexity

`insertionSort(array);` : O(1)

### Big O space complexity

`insertionSort(array);` : O(n^2)

## Solution

Use iteration to traverse the input array, beginning at the second element. Compare this element's value to the value of the previous element. If greater than or equal, do nothing and move on to the next element. Otherwise, shift the previous element and insert the current element in its place. Continue to the next element and insert it in the correct position relative to the previous elements in ascending order. Continue until all elements have been compared.

```javascript
insertionSort(array);
```

```plaintext
- Arguments: array
- Return: mutated input array
```

# quick-sort

Code Challenge - Class 28: Quick Sort

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

[Merge Sort Blog Post](https://github.com/tripppdx/data-structures-and-algorithms/blob/main/javascript/code-challenges/merge-sort/BLOG.md)

## Whiteboard Process

![merge-sort](./merge-sort.png)

## Approach & Efficiency

### Big O time complexity

`mergeSort(array);` : O(n\*log(n))

### Big O space complexity

`mergeSort(array);` : O(n)

## Solution

Recursively divides the array into subarrys that consist of a single element. Next, recursively merge the subarrays using comaprison into a sorted array.

```javascript
mergeSort(array);
```

```plaintext
- Arguments: array
- Return: mutated input array
```

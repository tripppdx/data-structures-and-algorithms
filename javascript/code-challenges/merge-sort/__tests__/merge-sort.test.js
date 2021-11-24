'use strict';

const mergeSort = require('../merge-sort.js');

describe('Insertion sort tests', () => {
  test('Can successfully sort an array', () => {
    const inputArr = [8, 4, 23, 42, 16, 15];
    const resultArr = [4, 8, 15, 16, 23, 42];

    expect(mergeSort(inputArr)).toEqual(resultArr);
  });

  test('Can successfully sort a reverse-sorted array', () => {
    const inputArr = [20, 18, 12, 8, 5, -2];
    const resultArr = [-2, 5, 8, 12, 18, 20];

    expect(mergeSort(inputArr)).toEqual(resultArr);
  });

  test('Can successfully sort an array with few uniques', () => {
    const inputArr = [5, 12, 7, 5, 5, 7];
    const resultArr = [5, 5, 5, 7, 7, 12];

    expect(mergeSort(inputArr)).toEqual(resultArr);
  });

  test('Can successfully sort a nearly-sorted array', () => {
    const inputArr = [2, 3, 5, 7, 13, 11];
    const resultArr = [2, 3, 5, 7, 11, 13];

    expect(mergeSort(inputArr)).toEqual(resultArr);
  });
});

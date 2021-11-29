'use strict';

const HashTable = require('../hashtable.js');

describe('Hashtable tests', () => {
  const table = new HashTable(1024);
  table.add('Jacob', 'instructor');
  table.add('cobJa', 'foo');

  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    expect(table.contains('Jacob')).toBe(true);
  });
  test('Retrieving based on a key returns the value stored', () => {
    expect(table.get('Jacob')).toEqual('instructor');
  });
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(table.get('Harvey')).toBe(null);
  });
  test('Successfully handle a collision within the hashtable', () => {
    expect(table.get('cobJa')).toEqual('foo');
  });
  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(table.get('cobJa')).toEqual('foo');
  });
  test('Successfully hash a key to an in-range value', () => {
    expect(table.hash('Jacob')).toBeLessThanOrEqual(1024);
  });
});

'use strict';

const AnimalShelter = require('../stack-queue-animal-shelter.js');

describe('Animal Shelter Tests', () => {
  test('Can successfully instantiate an empty Animal Shelter', () => {
    const shelter = new AnimalShelter();
    expect(shelter.DogQueue.front).toBe(null);
  });
  test('Can successfully enqueue a valid animal', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.DogQueue.front.value).toEqual('dog');
  });
  test('Enqueueing an invalid animal raises an exception', () => {
    const shelter = new AnimalShelter();
    expect(shelter.enqueue('rat')).toEqual('We only take dogs and cats');
  });
  test('Can successfully dequeue a valid animal', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.dequeue('dog')).toEqual('dog');
  });
  test('Dequeueing an invalid animal raises an exception', () => {
    const shelter = new AnimalShelter();
    expect(shelter.dequeue('rat')).toBe(null);
  });
  test('Dequeueing an unavailable animal raises an exception', () => {
    const shelter = new AnimalShelter();
    expect(shelter.dequeue('dog')).toEqual('Empty queue');
  });
});

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let nodeToAdd = new Node(value);
    let currentBack = this.back;

    if (currentBack) {
      currentBack.next = nodeToAdd;
    }
    this.back = nodeToAdd;

    if (!this.front) {
      this.front = nodeToAdd;
    }
  }

  dequeue() {
    if (this.front !== null) {
      let nodeToRemove = this.front;
      this.front = nodeToRemove.next;

      // account for the back if we are the last node
      if (this.back === nodeToRemove) {
        this.back = nodeToRemove.next;
      }

      return nodeToRemove.value;
    } else {
      return 'Empty queue';
    }
  }

  peek() {
    if (this.front !== null) {
      return this.front.value;
    } else {
      return 'Empty queue';
    }
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

class AnimalShelter {
  constructor() {
    this.DogQueue = new Queue();
    this.CatQueue = new Queue();
  }

  enqueue(animal) {
    if (animal === 'dog') {
      this.DogQueue.enqueue(animal);
    } else if (animal === 'cat') {
      this.CatQueue.enqueue(animal);
    } else {
      return 'We only take dogs and cats';
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.DogQueue.dequeue();
    } else if (pref === 'cat') {
      return this.CatQueue.dequeue();
    } else {
      return null;
    }
  }
}

const shelter = new AnimalShelter();
console.log(shelter.enqueue('rat'));
let tmp = shelter.dequeue('frog');
console.log(tmp);
console.log(JSON.stringify(shelter));

module.exports = AnimalShelter;

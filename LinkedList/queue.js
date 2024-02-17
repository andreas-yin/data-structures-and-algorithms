//Implementation of a queue using a doubly linked list
class Node {
  constructor(data) {
    this.data = data;
    this.previousNode = null;
    this.nextNode = null;
  }
}

class DoublyLinkedList {
  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  insertAtEnd(value) {
    const newNode = new Node(value);

    //If there are no elements in the doubly linked list:
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      //If the doubly linked list already has at least one node
      newNode.previousNode = this.lastNode;
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  }

  removeFromFront() {
    const removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    return removedNode;
  }
}

class Queue {
  constructor() {
    this.data = new DoublyLinkedList();
  }

  enqueue(element) {
    this.data.insertAtEnd(element);
  }

  dequeue() {
    const removedNode = this.data.removeFromFront();
    return removedNode.data;
  }

  read() {
    if (!this.data.firstNode) {
      return null;
    } else {
      return this.data.firstNode.data;
    }
  }
}

//Example of a queue
const queue = new Queue();
queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');

queue.dequeue();
queue.read();

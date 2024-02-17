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

class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertex(vertex) {
    if (this.adjacentVertices.includes(vertex)) {
      return;
    }
    this.adjacentVertices.push(vertex);
    vertex.addAdjacentVertex(this);
  }
}

const bfsTraverse = (startingVertex) => {
  const queue = new Queue();

  const visitedVertices = {};
  visitedVertices[startingVertex.value] = true;
  queue.enqueue(startingVertex);

  while (queue.read()) {
    const currentVertex = queue.dequeue();
    console.log(currentVertex.value);

    for (const adjacentVertex of currentVertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        visitedVertices[adjacentVertex.value] = true;
        queue.enqueue(adjacentVertex);
      }
    }
  }
};

// Example: social network, undirected graph
const alice = new Vertex('alice');
const bob = new Vertex('bob');
const candy = new Vertex('candy');
const derek = new Vertex('derek');
const fred = new Vertex('fred');
const helen = new Vertex('helen');

alice.addAdjacentVertex(bob);
alice.addAdjacentVertex(candy);
alice.addAdjacentVertex(derek);
bob.addAdjacentVertex(fred);
fred.addAdjacentVertex(helen);
helen.addAdjacentVertex(candy);

bfsTraverse(alice);

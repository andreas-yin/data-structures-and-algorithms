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

class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }

  addFriend(person) {
    if (this.friends.includes(person)) {
      return;
    }
    this.friends.push(person);
    person.addFriend(this);
  }
}

// findShortestPath algorithm for an undirected, unweighted graph:
// a combination of BFS and Dijsktra's algorithm
const findShortestPath = (startingPerson, destinationPerson) => {
  const queue = new Queue();
  const visitedPeople = {};

  // Similar to the prevTable from the Dijkstra's algorithm:
  const prevPersonTable = {};

  // We use breadth-first search (BFS)
  visitedPeople[startingPerson.name] = true;
  queue.enqueue(startingPerson);

  while (queue.read()) {
    const currentPerson = queue.dequeue();

    // Stop the search as soon as we find the destinationPerson
    if (currentPerson.name === destinationPerson.name) {
      break;
    }

    for (const friend of currentPerson.friends) {
      // In BFS, we get the shortest path to a friend when we visit them for the first time
      if (!visitedPeople[friend.name]) {
        visitedPeople[friend.name] = true;
        queue.enqueue(friend);
        prevPersonTable[friend.name] = currentPerson.name;
      }
    }
  }

  // Backword approach from Dijkstra's algorithm
  const shortestPath = [];
  let currentPersonName = destinationPerson.name;

  while (currentPersonName !== startingPerson.name) {
    shortestPath.push(currentPersonName);
    currentPersonName = prevPersonTable[currentPersonName];
  }

  shortestPath.push(startingPerson.name);

  return shortestPath.reverse();
};

const idris = new Person('Idris');
const kamil = new Person('Kamil');
const lina = new Person('Lina');
const sasha = new Person('Sasha');
const talia = new Person('Talia');
const ken = new Person('Ken');
const marco = new Person('Marco');

idris.addFriend(kamil);
idris.addFriend(talia);
kamil.addFriend(lina);
lina.addFriend(sasha);
talia.addFriend(ken);
ken.addFriend(marco);
marco.addFriend(sasha);

findShortestPath(idris, lina);

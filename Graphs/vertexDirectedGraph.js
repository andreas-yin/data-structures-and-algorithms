class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertex(vertex) {
    this.adjacentVertices.push(vertex);
  }
}

// Example: social network, directed graph
const alice = new Vertex('alice');
const bob = new Vertex('bob');
const cynthia = new Vertex('cynthia');

alice.addAdjacentVertex(bob);
alice.addAdjacentVertex(cynthia);
bob.addAdjacentVertex(cynthia);
cynthia.addAdjacentVertex(bob);

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

// Example: social network, undirected graph
const alice = new Vertex('alice');
const bob = new Vertex('bob');

alice.addAdjacentVertex(bob);

console.log(alice.adjacentVertices);
console.log(bob.adjacentVertices);

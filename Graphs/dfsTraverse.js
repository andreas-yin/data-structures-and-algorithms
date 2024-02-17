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

const dfsTraverse = (vertex, visitedVertices = {}) => {
  visitedVertices[vertex.value] = true;

  console.log(vertex.value);

  for (const adjacentVertex of vertex.adjacentVertices) {
    if (visitedVertices[adjacentVertex.value]) {
      continue;
    }
    dfsTraverse(adjacentVertex, visitedVertices);
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

dfsTraverse(alice);

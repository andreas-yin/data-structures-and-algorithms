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

const dfs = (vertex, searchValue, visitedVertices = {}) => {
  if (vertex.value === searchValue) {
    return vertex;
  }

  visitedVertices[vertex.value] = true;

  for (const adjacentVertex of vertex.adjacentVertices) {
    if (visitedVertices[adjacentVertex.value]) {
      continue;
    }

    if (adjacentVertex.value === searchValue) {
      return adjacentVertex;
    }

    const vertexWeAreSearchingFor = dfs(
      adjacentVertex,
      searchValue,
      visitedVertices
    );

    if (vertexWeAreSearchingFor) {
      return vertexWeAreSearchingFor;
    }
  }

  return null;
};

// Example: social network, directed graph
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

const vertexWeAreSearchingFor = dfs(alice, 'helen');
console.log(vertexWeAreSearchingFor.value);

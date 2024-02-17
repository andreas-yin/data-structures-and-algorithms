class WeightedGraphVertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = {};
  }

  addAdjacentVertex(vertex, weight) {
    this.adjacentVertices[vertex] = weight;
  }
}

// Example
const dallas = new City('Dallas');
const toronto = new City('Toronto');

dallas.addAdjacentVertex(toronto, 138);
toronto.addAdjacentVertex(dallas, 216);

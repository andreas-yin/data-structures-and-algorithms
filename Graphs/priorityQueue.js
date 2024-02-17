// min-heap for implementation of a priority queue
class Heap {
  constructor() {
    this.data = [];
  }

  rootNode() {
    return this.data[0];
  }

  lastNode() {
    return this.data[this.data.length - 1];
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  insert(value) {
    this.data.push(value);

    let newNodeIndex = this.data.length - 1;

    while (
      newNodeIndex > 0 &&
      this.data[newNodeIndex] < this.data[this.parentIndex(newNodeIndex)]
    ) {
      [this.data[this.parentIndex(newNodeIndex)], this.data[newNodeIndex]] = [
        this.data[newNodeIndex],
        this.data[this.parentIndex(newNodeIndex)],
      ];

      newNodeIndex = this.parentIndex(newNodeIndex);
    }
  }

  hasSmallerChild(index) {
    return (
      (this.data[this.leftChildIndex(index)] &&
        this.data[this.leftChildIndex(index)] < this.data[index]) ||
      (this.data[this.rightChildIndex(index)] &&
        this.data[this.rightChildIndex(index)] < this.data[index])
    );
  }

  calculateSmallerChildIndex(index) {
    if (!this.data[this.rightChildIndex(index)]) {
      return this.leftChildIndex(index);
    }

    if (
      this.data[this.rightChildIndex(index)] <
      this.data[this.leftChildIndex(index)]
    ) {
      return this.rightChildIndex(index);
    } else {
      return this.leftChildIndex(index);
    }
  }

  delete() {
    this.data[0] = this.data.pop();
    let trickleNodeIndex = 0;

    while (this.hasSmallerChild(trickleNodeIndex)) {
      const smallerChildIndex =
        this.calculateSmallerChildIndex(trickleNodeIndex);

      [this.data[trickleNodeIndex], this.data[smallerChildIndex]] = [
        this.data[smallerChildIndex],
        this.data[trickleNodeIndex],
      ];

      trickleNodeIndex = smallerChildIndex;
    }
  }
}

module.exports = {
  Heap: Heap,
};

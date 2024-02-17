// Implementation of a max-heap
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
      this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]
    ) {
      [this.data[this.parentIndex(newNodeIndex)], this.data[newNodeIndex]] = [
        this.data[newNodeIndex],
        this.data[this.parentIndex(newNodeIndex)],
      ];

      newNodeIndex = this.parentIndex(newNodeIndex);
    }
  }

  hasGreaterChild(index) {
    return (
      (this.data[this.leftChildIndex(index)] &&
        this.data[this.leftChildIndex(index)] > this.data[index]) ||
      (this.data[this.rightChildIndex(index)] &&
        this.data[this.rightChildIndex(index)] > this.data[index])
    );
  }

  calculateLargerChildIndex(index) {
    if (!this.data[this.rightChildIndex(index)]) {
      return this.leftChildIndex(index);
    }

    if (
      this.data[this.rightChildIndex(index)] >
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

    while (this.hasGreaterChild(trickleNodeIndex)) {
      const largerChildIndex = this.calculateLargerChildIndex(trickleNodeIndex);

      [this.data[trickleNodeIndex], this.data[largerChildIndex]] = [
        this.data[largerChildIndex],
        this.data[trickleNodeIndex],
      ];

      trickleNodeIndex = largerChildIndex;
    }
  }
}

//Example
const heap = new Heap();
heap.insert(9);
heap.insert(10);
heap.insert(8);
heap.insert(6);
heap.insert(5);

heap.delete();
console.log(heap.data);

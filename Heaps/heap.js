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
}





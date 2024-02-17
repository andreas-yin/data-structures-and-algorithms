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
        } else { //If the doubly linked list already has at least one node
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

    printReversed() {
        let currentNode = this.lastNode;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.previousNode;
        }
    }
}


const list = new DoublyLinkedList();

list.insertAtEnd('once');
list.insertAtEnd('upon');
list.insertAtEnd('a');
list.insertAtEnd('time');

list.printReversed();
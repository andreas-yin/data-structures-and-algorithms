class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(firstNode) {
        this.firstNode = firstNode;
    }

    read(index) {
        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.nextNode;
            currentIndex++;

            if (!currentNode) {
                return null;
            }
        }

        return currentNode.data;
    }

    indexOf(value) {
        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentNode) {
            if (currentNode.data === value) {
                return currentIndex;
            }

            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        return null;
    }

    insertAtIndex(index, value) {
        const newNode = new Node(value);

        if (index === 0) {
            newNode.nextNode = this.firstNode;
            this.firstNode = newNode;
        }

        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        //Have the new node link to the next node
        newNode.nextNode = currentNode.nextNode;

        //Change the link of the previous node to point to our new node
        currentNode.nextNode = newNode;
    }

    deleteAtIndex(index) {
        if (index === 0) {
            this.firstNode = this.firstNode.nextNode;
            return;
        }

        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        const nodeAfterDeletedNode = currentNode.nextNode.nextNode;
        currentNode.nextNode = nodeAfterDeletedNode;
    }

    printAll() {
        let currentNode = this.firstNode;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.nextNode;
        }
    }
}


//Example of a linked list
const node1 = new Node('once');
const node2 = new Node('upon');
const node3 = new Node('a');
const node4 = new Node('time');

node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;

const list = new LinkedList(node1);



//Function for deleting middle node without knowing the preceding nodes
const deleteMiddleNode = knownNode => {
    //Make data of known node the same as the data of the next node
    knownNode.data = knownNode.nextNode.data;

    //Have the known node link to the node that is two nodes to the right of it
   knownNode.nextNode = knownNode.nextNode.nextNode;
};


deleteMiddleNode(node3);
list.printAll();

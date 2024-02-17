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

    readLastElement() {
        let currentNode = this.firstNode;

        //Check the node's link. Once it's null, the current node is the last node
        while (currentNode.nextNode) {            
            currentNode = currentNode.nextNode;
        }
        return currentNode.data;
    }
}


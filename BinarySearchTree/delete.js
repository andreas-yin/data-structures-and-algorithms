const remove = (valueToDelete, node) => {    

    if (node === null) { //Base case: node does not exist
        return null;
    } else if (valueToDelete < node.value) {
        node.leftChild = remove(valueToDelete, node.leftChild);
        return node; //needed for recursive calls (ensures that the same left child is returned if the valueToDelete is further down)
    } else if (valueToDelete > node.value) {
        node.rightChild = remove(valueToDelete, node.rightChild);
    } else if (valueToDelete === node.value) {

        if (node.leftChild === null) { 
            return node.rightChild; //As this is passed to the parent of the node we're currently at, the node will be bypassed, thus effectively deleted
            //If the node does not have any children at all, this will return null
        } else if (node.rightChild === null) {
            return node.leftChild;
        } else { //if the node has two children
            node.rightChild = lift(node.rightChild, node); //either returns the same right child or null (if the right child has no children)
            return node;
        }
    }
};

const lift = (node, nodeToDelete) => { //'lifts' the successor node to where the node to be deleted is
    if (node.leftChild) {
        node.leftChild = lift(node.leftChild, nodeToDelete);
        return node;
    } else { //Base case: The current node does not have a left child, which makes this node the successor node
        nodeToDelete.value = node.value //Copy the value of the current node into the node we're 'deleting'

        //If successor node has a right child, return it
        //Or if the successor node does not have any child, this will work, too, and return null 
        return node.rightChild;
    }
};
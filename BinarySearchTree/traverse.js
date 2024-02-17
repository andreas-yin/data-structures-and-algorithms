//Inorder traversal
const traverseAndPrint = node => {
    if (node === null) {
        return;
    }

    traverseAndPrint(node.leftChild);
    console.log(node.value);
    traverseAndPrint(node.rightChild);
};


//Example
class TreeNode {
    constructor(val, left = null, right = null) {
        this.value = val;
        this.leftChild = left;
        this.rightChild = right;
    }
}

const node1 = new TreeNode(25);
const node2 = new TreeNode(75);
const root = new TreeNode(50, node1, node2);

traverseAndPrint(root);
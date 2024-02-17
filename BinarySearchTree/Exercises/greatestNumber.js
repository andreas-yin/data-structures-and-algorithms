const findTheGreatest = node => {
    if (node.rightChild) {
        return findTheGreatest(node.rightChild);
    } else {
        return node.value;
    }    
};


//Example:
class TreeNode {
    constructor(val, left = null, right = null) {
        this.value = val;
        this.leftChild = left;
        this.rightChild = right;
    }
}

const node1 = new TreeNode(25);
const node2 = new TreeNode(100)
const node3 = new TreeNode(75, null, node2);
const root = new TreeNode(50, node1, node3);

findTheGreatest(root);
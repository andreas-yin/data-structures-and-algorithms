const search = (searchValue, node) => {    
    if (node === null || node.value === searchValue) { //Base case
        return node;
    } else if (searchValue < node.value) {
        return search(searchValue, node.leftChild);
    } else { //if searchValue > node.value
        return search(searchValue, node.rightChild);
    }
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

const searchResult = search(75, root);
console.log(searchResult.value);
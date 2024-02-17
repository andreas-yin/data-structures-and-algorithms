class TreeNode {
    constructor(val, left = null, right = null) {
        this.value = val;
        this.leftChild = left;
        this.rightChild = right;
    }
}

const insert = (value, node) => {
    if (value < node.value) {

        if (node.leftChild === null) { //Base case
            node.leftChild = new TreeNode(value);
        } else {
            insert(value, node.leftChild);
        }

    } else if (value > node.value) {

        if (node.rightChild === null) { //Base case
            node.rightChild = new TreeNode(value);
        } else {
            insert(value, node.rightChild);
        }

    } 
};


//Example
const node1 = new TreeNode(25);
const node2 = new TreeNode(75);
const root = new TreeNode(50, node1, node2);

const search = (searchValue, node) => {    
    if (node === null || node.value === searchValue) { //Base case
        return node;
    } else if (searchValue < node.value) {
        return search(searchValue, node.leftChild);
    } else { //if searchValue > node.value
        return search(searchValue, node.rightChild);
    }
};

insert(30, root);

const searchResult = search(30, root);
console.log(searchResult.value);
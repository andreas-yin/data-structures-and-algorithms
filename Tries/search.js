class TrieNode {
    constructor() {
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    search(word) {
        let currentNode = this.root;
        
        for (const char of word) {
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char]; 
            } else {
                return null;
            }
        } 

        return currentNode;
    }
}
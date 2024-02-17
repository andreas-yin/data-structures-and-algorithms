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

    insert(word) {
        let currentNode = this.root;

        for (const char of word) {
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char]; 
            } else {
                const newNode = new TrieNode();
                currentNode.children[char] = newNode;
                currentNode = newNode;
            }  
        }

        //After inserting the entire word
        currentNode.children['*'] = null;
    }
}


//Example
const newTrie = new Trie();
newTrie.insert('hello');
console.log(newTrie.search('hello').children);
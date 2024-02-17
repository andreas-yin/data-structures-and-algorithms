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

    collectAllWords(node=null, word='', words=[]) {
        let currentNode = node || this.root;

        for (const [key, childNode] of Object.entries(currentNode.children)) {
           
            if (key === '*') { //Base case
                words.push(word);
            } else {
                this.collectAllWords(childNode, word + key, words);
            }
        }

        return words;
    }
}


//Example
const newTrie = new Trie();
newTrie.insert('hello');
newTrie.insert('hesitate');
newTrie.collectAllWords();
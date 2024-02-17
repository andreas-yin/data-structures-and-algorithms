class Stack {
    constructor() {
        this.data = [];
    }
    push(element) {
        this.data.push(element);
    }
    pop() {
        return this.data.pop();
    }
    read() {
        return this.data[this.data.length - 1];
    }
}

const reverseString = string => {
    let stack = new Stack();

    for (const char of string) {
        stack.push(char);
    }

    let reversedString = '';

    while (stack.read()) {
        reversedString += stack.pop();
    }

    return reversedString;
};

reverseString('abcde');
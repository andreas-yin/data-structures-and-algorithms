class Stack {
    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() {
        return this.data.pop(); 
        //Why the 'return' keyword is needed: 
        //The built-in Array.prototype.pop method does return a value (the element that was removed from the array), but this value is not returned directly to the caller of the pop method in your Stack class. 
        //Instead, the value returned by the built-in Array.prototype.pop method is returned to the pop method of your Stack class, 
        //which then uses the return keyword to return this value to the caller.
    }

    read() {
        return this.data[this.data.length - 1];
    }
}



let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());


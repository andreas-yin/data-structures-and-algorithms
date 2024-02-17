//Create a linter that checks opening and closing braces

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

class Linter {
    constructor() {
        this.stack = new Stack();
    }

    lint(text) {

        //Helper functions
        const isOpeningBrace = chr => {
            return ['(', '[', '{'].includes(chr);
        };

        const isClosingBrace = chr => {
            return [')', ']', '}'].includes(chr);
        };

        const isNotAMatch = (openingBrace, closingBrace) => {
            const map = new Map();
            map.set('(', ')')
                .set('[', ']')
                .set('{', '}');
            
            return closingBrace !== map.get(openingBrace);
        };


        for (const char of text) {
                       
            if (isOpeningBrace(char)) {
                this.stack.push(char);
            } else if (isClosingBrace(char)) {
                const poppedOpeningBrace = this.stack.pop();

                if (!poppedOpeningBrace) {
                    return `${char} doesn't have opening brace`;
                }

                if (isNotAMatch(poppedOpeningBrace, char)) {
                    return `${char} has mismatched opening brace`;
                }
            }
        }

        if (this.stack.read()) {
            return `${this.stack.read()} does not have closing brace`;
        }

        //Return true if line has no errors
        return true;
    }
}

const linter = new Linter();
linter.lint('(var x = { y: [1,2,3} ])');

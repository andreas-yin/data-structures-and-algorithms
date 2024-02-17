class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(element) {
        this.data.push(element);
    }
    dequeue() {
        return this.data.shift();
    }
    read() {
        return this.data[0];
    }
}

class PrintManager {
    constructor() {
        this.queue = new Queue();
    }   

    queuePrintJob(document) {
        this.queue.enqueue(document);
    }

    run() {
        //Helper function
        const print = doc => {
            console.log(doc);
        }

        while (this.queue.read()) {
            print(this.queue.dequeue());
        }
    }
}

const printManager = new PrintManager();
printManager.queuePrintJob('First Document');
printManager.queuePrintJob('Second Document');
printManager.queuePrintJob('Third Document');
printManager.run();
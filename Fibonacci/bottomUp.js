//Dynamic programming: going bottom-up
//A function that returns the Nth number in the Fibonacci sequence 
//(the 0 is considered the 0th number in the sequence)

const fib = n => {
    if (n === 0) {
        return 0;
    }

    let a = 0;
    let b = 1;

    for (let i = 1; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + a;
    }    

    return b;    
};

fib(6);
//Dynamic programming: memoization
//A function that returns the Nth number in the Fibonacci sequence 
//(the 0 is considered the 0th number in the sequence)

const fib = (n, memo = new Map()) => {
    //Base case:
    if (n === 0 || n === 1) {
        return n;
    }

    if (!memo.get(n)) {
        memo.set(n, fib(n-2, memo) + fib(n-1, memo));
    }
    
    return memo.get(n);
};

fib(6);

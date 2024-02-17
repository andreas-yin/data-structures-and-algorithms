//Recursion Category: Calculations (Top-Down Thinking)

const factorial = n => {
    if (n ===1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }    
};

factorial(5);
//Not using a ES2015 Map here because map keys are compared (almost) as if with the === operator. 
//When you use a map, two array instances, even if they contain the same values, do not ever compare as === to each other.

//When you use use a JavaScript object with an array as a key, the array is automatically converted to a string, 
//e.g. [1, 2, 3] becomes '1, 2, 3' 

const uniquePaths = (rows, columns, memo = {}) => {
    if (rows === 1 || columns === 1) {
        return 1;
    }

    if (!memo[[rows, columns]]) {
        memo[[rows, columns]] = uniquePaths(rows - 1, columns, memo) + uniquePaths(rows, columns - 1, memo);
    }

    return memo[[rows, columns]];
    
};

uniquePaths(3, 7);



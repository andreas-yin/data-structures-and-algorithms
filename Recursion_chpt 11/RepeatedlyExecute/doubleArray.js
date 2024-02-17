//Recursion Category: Repeatedly Execute
//Pass in extra parameters that you can keep track of

const doubleArray = (array, index = 0) => {
    //Base case:
    if (index >= array.length) {
        return array;
    }

    array[index] *= 2; 
    return doubleArray(array, index + 1); //A 'return' statement is needed, otherwise you'd have an array as an end result, but it won't be returned to the original caller
};

 doubleArray([1, 2, 3, 4]);


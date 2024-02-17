const findArraysAndPrintNumbers = array => {
    for (const value of array) {
        if (Array.isArray(value)) {
            findArraysAndPrintNumbers(value)
        } else { //Base case: value is not an array
            console.log(value);
        }
    }
};value
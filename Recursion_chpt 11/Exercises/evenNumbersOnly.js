const extractEvenNumbers = array => {
    //Base case: array is empty
    if (array.length === 0) {
        return [];
    }

    if (array[0] % 2 === 0) {
        return [array[0], ...extractEvenNumbers(array.slice(1))];
    } else {
        return [...extractEvenNumbers(array.slice(1))];
    }   
   
};

extractEvenNumbers([1, 2, 3, 4, 5, 6]);


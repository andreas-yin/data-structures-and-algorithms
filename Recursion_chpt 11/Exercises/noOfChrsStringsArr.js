const numberOfCharacters = array => {
    //Alternative base case: 
    // if (array.length === 0) return 0;

    //Base case:
    if (array.length === 1) {
        return array[0].length;
    }

    return array[0].length + numberOfCharacters(array.slice(1));
};

numberOfCharacters(['ab', 'c', 'def', 'ghij']); //should return 10
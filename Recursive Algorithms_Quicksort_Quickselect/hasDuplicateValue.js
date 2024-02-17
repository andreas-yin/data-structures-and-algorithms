//Implemented with the JavaScript built-in sort algorithm, 
//which has an efficiency of O(n * log n)

const hasDuplicateValue = array => {
    //Sort the values in numerical order
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            return true;
        }
    }

    return false;
};


hasDuplicateValue([5, 9, 3, 2, 4, 5, 6]);


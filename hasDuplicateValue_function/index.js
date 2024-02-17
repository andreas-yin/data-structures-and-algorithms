//Time efficiency O(n^2)
const hasDuplicateValue = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }

    return false;
};

//Time efficiency O(n)
const hasDuplicateValueFaster = array => {
    let existingNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (existingNumbers[array[i]] === 1) {
            return true;
        } else {
            existingNumbers[array[i]] === 1;
        }
    }

    return false;
};

const intersection = (array1, array2) => {
    const intersectionArray = [];
    const hashTable = {};
    for (const value of array1) {
        hashTable[value] = true;
    }

    for (const value of array2) {
        if (hashTable[value]) {
            intersectionArray.push(value);
        }
    }

    return intersectionArray;
};


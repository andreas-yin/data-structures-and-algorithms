const duplicateString = array => {
    const hashTable = {};

    for (const value of array) {
        if (hashTable[value]) {
            return value;
        } else {
            hashTable[value] = true;
        }
    }

    return null;
};


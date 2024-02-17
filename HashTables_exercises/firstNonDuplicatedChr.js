const firstNonDuplicatedChr = string => {
    const hashTable = {};

    for (const chr of string) {
        if (!hashTable[chr]) {
            hashTable[chr] = 1;
        }  else {
            hashTable[chr]++;
        }
    }

    for (const chr of string) {
        if (hashTable[chr] === 1) {
            return chr;
        }
    }
};

firstNonDuplicatedChr('minimum'); //output: 'n'
const missingLetter = string => {
    const hashTable = {};

    for (value of string) {
        if (!hashTable[value]) {
            hashTable[value] = true;
        }
    }

    for (let i = 97; i < 123; i++) {
        let chr = String.fromCharCode(i);
        if (!hashTable[chr]) {
            return chr;
        }
    }
};

missingLetter('the quick brown box jumps over a lazy dog'); //output: 'f'
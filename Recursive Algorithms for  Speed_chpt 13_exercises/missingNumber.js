const missingNunber = array => {
    array.sort((a, b) => a -b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i) {
            return i;
        }
    }

    return null;
};


missingNunber([5, 2, 4, 1, 0]); //should return 3
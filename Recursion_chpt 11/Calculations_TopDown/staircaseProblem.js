const numberOfPaths = n => {
    //Base case
    if (n === -1) {
        return 0;
    } else if (n === 1 || n === 0) {
        return 1;
    }

    return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3);
};


numberOfPaths(11);
const numberOfShortestPaths = (rows, columns) => {
    //Base case:
    if (rows === 1 || columns === 1) {
        return 1;
    }

    return numberOfShortestPaths(rows - 1, columns) + numberOfShortestPaths(rows, columns - 1);
};

numberOfShortestPaths(3, 7);
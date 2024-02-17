const stringReversal = string => {
    if (string.length ===1) {
        return string[0];
    }
    return stringReversal(string.slice(1)) + string[0];
};

stringReversal('abcde');
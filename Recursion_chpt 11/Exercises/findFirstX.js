//This function returns the index of the first 'x'. We are assuming the string definitely has at least one 'x'
const findFirstX = (string, index = 0) => {
    //Base case:
    if (string[index] === 'x') {
        return index;
    }

    return findFirstX(string, index + 1); 
};

findFirstX('abcdefghijklmnopqrstuvwxyz');


//Alternative solution:
const findFirstXAlternative = string => {
    //Base case: 
    if (string[0] === 'x') {
        return 0;
    }

    return findFirstXAlternative(string.slice(1)) + 1;
};

findFirstXAlternative('abcdefghijklmnopqrstuvwxyz');
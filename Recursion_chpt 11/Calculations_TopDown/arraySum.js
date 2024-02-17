const arraySum = array => {
    if (array.length === 1) {
        return array[0];
    }
    return array[0] + arraySum(array.slice(1));
};

arraySum([2, 3, 4, 5]);
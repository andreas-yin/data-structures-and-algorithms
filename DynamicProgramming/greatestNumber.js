const max = array => {
    console.log('Recursion');
    
    //Base case:
    if (array.length === 1) {
        return array[0];
    }

    const maxRemainder = max(array.slice(1));
    if (array[0] > maxRemainder) {
        return array[0];
    } else {
        return maxRemainder;
    }
};

max([1, 2, 3, 4]);
const addUntil100 = array => {
    if (array.length === 0) {
        return 0;
    }

    const sumOfRemainingNumbers = addUntil100(array.slice(1));

    if (array[0] + sumOfRemainingNumbers > 100) {
        return sumOfRemainingNumbers;
    } else {
        return array[0] + sumOfRemainingNumbers;
    }
};

addUntil100([50, 50, 1]);
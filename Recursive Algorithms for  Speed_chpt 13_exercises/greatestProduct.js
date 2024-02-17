const greatestProduct3Numbers = array => {
    array.sort((a, b) => a - b);

    return array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
};

greatestProduct3Numbers([5,9,3, 1, 8, 2]); //should return 360
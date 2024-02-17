//Efficiency: O(n^2)
const greatestNumberApproach1 = array => {
    for (let i = 0; i < array.length; i++) {
        let isValTheGreatest = true;

        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                isValTheGreatest = false;
            }
        }

        if (isValTheGreatest) {
            return array[i];
        }
    }
};

greatestNumberApproach1([3, 1, 9, 2, 5]);

//Efficiency: O(n * log n)
const greatestNumberApproach2 = array => {
    array.sort((a, b) => a - b);

    return array[array.length - 1];
};

greatestNumberApproach2([3, 1, 9, 2, 5]);


//Efficiency: O(n)
const greatestNumberApproach3 = array => {
    let greatestValSoFar = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > greatestValSoFar) {
            greatestValSoFar = array[i];
        }
    }

    return greatestValSoFar;
};

greatestNumberApproach3([3, 1, 9, 2, 5]);
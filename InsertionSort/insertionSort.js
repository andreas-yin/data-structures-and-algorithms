//Number of steps for best case, average case and worst case
//Best case: n
//Avergage case: n^2 / 2
//Worst case: n^2 

const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        let tempValue = array[i];
        let position = i - 1;

        while (position >= 0) {
            if (array[position] > tempValue) {
                array[position + 1] = array[position];
                position--;
            } else {
                break;
            }
        }

        array[position + 1] = tempValue;
    }

    return array;
};
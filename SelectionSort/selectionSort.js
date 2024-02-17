//Number of steps for best case, average case and worst case is the same: n^2 / 2
const selectionSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        let lowestNumberIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }

        if (lowestNumberIndex !== i) {
            let temp = array[i];
            array[i] = array[lowestNumberIndex];
            array[lowestNumberIndex] = temp;
        }
    }

    return array;
};
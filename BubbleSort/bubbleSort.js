//The time efficiency is approximately O(n^2)

const bubbleSort = array => {
    let unsortedUntilIndex = array.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < unsortedUntilIndex; i++) {
            if (array[i] > array[i + 1]) {

                //Swap the two numbers using destructuring assignment (no temp variable needed -> less memory needed)
                [array[i], array[i + 1]] = [array[i + 1], array[i]]

                sorted = false;                 
            }
        }
        unsortedUntilIndex--;
    }

    return array;    
};


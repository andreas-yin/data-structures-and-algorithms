//Big O for Quicksort: 
//Best case or average case: O(n * log n)
//Worst case (array in ascending or descending order): O(n^2)

class SortableArray {
    constructor(array) {
        this.array = array;
    }

    partition(leftPointer, rightPointer) {
        const pivotIndex = rightPointer;
        const pivot = this.array[pivotIndex];

        rightPointer--;

        while (true) {
            while (this.array[leftPointer] < pivot) {
                leftPointer++;
            }
            while (this.array[rightPointer] > pivot) {
                rightPointer--;
            }

            if (leftPointer >= rightPointer) {
                break;
            } else {
                //Swap the values of the left pointer and the right pointer
                [this.array[leftPointer], this.array[rightPointer]] = [this.array[rightPointer], this.array[leftPointer]];
                leftPointer++;
            }
        }

        //Swap the value of the left pointer with the pivot
        [this.array[leftPointer], this.array[pivotIndex]] = [this.array[pivotIndex], this.array[leftPointer]];
        
        return leftPointer;
    }

    quickSort(leftIndex, rightIndex) {
        //Base case: the subarray has 0 or 1 elements
        if (rightIndex - leftIndex <= 0) {
            return
        }    

        const pivotIndex = this.partition(leftIndex, rightIndex);

        this.quickSort(leftIndex, pivotIndex - 1);
        this.quickSort(pivotIndex + 1, rightIndex);
    }
}


const array = [0, 5, 2, 1, 6, 3];
const sortableArray = new SortableArray(array);
sortableArray.quickSort(0, array.length - 1);
console.log(sortableArray.array);

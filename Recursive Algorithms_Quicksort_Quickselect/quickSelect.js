//Big O for Quickselect: O(n)

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

    quickSelect(kthLowestValue, leftIndex, rightIndex) {
        //Base case: one cell left
        if (rightIndex - leftIndex <= 0) {
            return this.array[leftIndex];
        } 

        const pivotIndex = this.partition(leftIndex, rightIndex);
        
        if (kthLowestValue < pivotIndex) {
            return this.quickSelect(kthLowestValue, leftIndex, pivotIndex - 1);
        } else if (kthLowestValue > pivotIndex) {
            return this.quickSelect(kthLowestValue, pivotIndex + 1, rightIndex);
        } else { //if (kthLowestValue === pivotIndex)
            return this.array[pivotIndex];
        }
    }
}

const array = [0, 50, 20, 10, 60, 30];
const sortableArray = new SortableArray(array);
sortableArray.quickSelect(1, 0, array.length - 1); //return the second-to-lowest value (with an index of 1), which is 10
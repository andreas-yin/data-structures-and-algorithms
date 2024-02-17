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
}


const sortableArray = new SortableArray([1, 4, 2, 3]);
sortableArray.partition(0, 3); //should return 2
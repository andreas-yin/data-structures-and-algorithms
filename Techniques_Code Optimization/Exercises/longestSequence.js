// Time complexity: O(n)
// It's actually about 3n steps
// Space complexity: O(n)

const longestSequenceLength = (array) => {
  const hashTable = {};
  let greatestSequenceLength = 0;

  for (const num of array) {
    hashTable[num] = true;
  }

  for (const num of array) {
    // Magical lookups, only start counting the sequence if current num is the bottom of the sequence
    if (!hashTable[num - 1]) {
      let currentSequenceLength = 1;
      let currentNumber = num;

      while (hashTable[currentNumber + 1]) {
        currentNumber++;
        currentSequenceLength++;

        //Greedy approach
        if (currentSequenceLength > greatestSequenceLength) {
          greatestSequenceLength = currentSequenceLength;
        }
      }
    }
  }

  return greatestSequenceLength;
};

// Example
longestSequenceLength([10, 5, 12, 3, 55, 30, 4, 11, 2]); // should return 4
longestSequenceLength([19, 13, 15, 12, 18, 14, 17, 11]); // should return 5

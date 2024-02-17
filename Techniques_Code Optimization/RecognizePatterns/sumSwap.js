// Time complexity: O(n + m)
// Space complexity: O(n)

const sumSwap = (array1, array2) => {
  const hashTable = {};
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];

    if (hashTable[array1[i]]) {
      hashTable[array1[i]].push(i);
    } else {
      hashTable[array1[i]] = [i];
    }
  }

  for (const num of array2) {
    sum2 += num;
  }

  const shiftAmount = (sum1 - sum2) / 2;

  for (let j = 0; j < array2.length; j++) {
    const counterpart = array2[j] + shiftAmount;
    if (hashTable[counterpart]) {
      const index1 = hashTable[counterpart].pop();
      return [index1, j];
    }
  }

  return null;
};

// Example
sumSwap([5, 3, 3, 7], [4, 1, 1, 6]); // should return [3, 0]

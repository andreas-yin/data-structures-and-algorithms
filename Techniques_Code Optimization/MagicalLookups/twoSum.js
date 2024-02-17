// Time complexity: O(n)
const twoSum = (array) => {
  const hashTable = {};

  for (let i = 0; i < array.length; i++) {
    if (hashTable[10 - array[i]]) {
      return true;
    }
    hashTable[array[i]] = true;
  }

  return false;
};

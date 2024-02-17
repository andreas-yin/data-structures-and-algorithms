// Time complexity: 0(n)
// Space complexity: 0(n)
const groupArray = (array) => {
  const hashTable = {};
  const newArray = [];

  for (const value of array) {
    if (hashTable[value]) {
      hashTable[value]++;
    } else {
      hashTable[value] = 1;
    }
  }

  for (const [key, count] of Object.entries(hashTable)) {
    for (let i = 0; i < count; i++) {
      newArray.push(key);
    }
  }

  return newArray;
};

// Example
groupArray(['a', 'c', 'd', 'b', 'b', 'c', 'a', 'd', 'c', 'b', 'a', 'd']);

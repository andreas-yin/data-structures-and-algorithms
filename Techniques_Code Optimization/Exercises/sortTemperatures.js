// Time complexity: 0(n)
// It's actually 2n + 21 steps
const sortTemperatures = (array) => {
  const readingsHashTable = {};
  const sortedArray = [];

  for (const temp of array) {
    if (!readingsHashTable[temp]) {
      readingsHashTable[temp] = 1;
    } else {
      readingsHashTable[temp]++;
    }
  }

  for (let temperature = 970; temperature <= 990; temperature++) {
    // Magical lookups
    if (readingsHashTable[temperature / 10]) {
      for (let i = 0; i < readingsHashTable[temperature / 10]; i++) {
        sortedArray.push(temperature / 10);
      }
    }
  }

  return sortedArray;
};

// Example
sortTemperatures([98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1]);

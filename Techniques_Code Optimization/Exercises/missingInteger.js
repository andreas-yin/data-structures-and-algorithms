// Time complexity: O(n)
// Space complexity: O(1)
const findMissingInteger = (array) => {
  let fullSum = 0;
  let currentSum = 0;

  for (let i = 1; i < array.length + 1; i++) {
    fullSum += i;
  }

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
  }

  // Pattern recognized through generating examples
  return fullSum - currentSum;
};

// Example
findMissingInteger([2, 3, 0, 6, 1, 5]); // should return 4

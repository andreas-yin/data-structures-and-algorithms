// Time complexity: 0(n)
// Space complexity: 0(1)
const maxSum = (array) => {
  let currentSum = 0;
  let greatestSum = 0;

  for (const num of array) {
    // Pattern: reset current sum to 0 if current sum is a negative number
    if (currentSum + num < 0) {
      currentSum = 0;
    } else {
      currentSum += num;

      // Greedy approach
      if (currentSum > greatestSum) {
        greatestSum = currentSum;
      }
    }
  }

  return greatestSum;
};

// Example
maxSum([3, -4, 4, -3, 5, -9]); // should return 6

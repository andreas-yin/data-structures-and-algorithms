// Time complexity: O(n)
// Space complexity: O(1)

const getGreatestProfit = (array) => {
  let buyAt = array[0];
  let greatestProfit = 0;

  for (const num of array) {
    const currentProfit = num - buyAt;

    // Greedy approach
    if (num < buyAt) {
      buyAt = num;
    } else if (currentProfit > greatestProfit) {
      greatestProfit = currentProfit;
    }
  }

  return greatestProfit;
};

// Examples
getGreatestProfit([10, 7, 5, 8, 11, 2, 6]); // should return 6
getGreatestProfit([1, 2, 3, 4, 5]); // should return 4
getGreatestProfit([5, 6, 1, 4, 2, 7, 10]); // should return 9

// Time complexity: O(1)
// Space complexity: O(1)
const coinGameWinner = (numberOfCoins) => {
  if ((numberOfCoins - 1) % 3 === 0) {
    return 'them';
  } else {
    return 'you';
  }
};

// Example
coinGameWinner(16);

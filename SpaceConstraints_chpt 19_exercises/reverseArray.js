// Space complexity: O(1)
const reverse = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i],
    ];
  }

  return array;
};

// Example
reverse([1, 2, 3, 4, 5, 6]);

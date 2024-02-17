// Time complexity: 0(n)
// Space complexity: 0(1)
const findIncreasingTriplet = (array) => {
  let lowestPrice = array[0];
  let middlePrice = Infinity;

  for (const price of array) {
    if (price <= lowestPrice) {
      lowestPrice = price;
    } else if (price <= middlePrice) {
      middlePrice = price;
    } else {
      // if current price is higher than middle price
      return true;
    }
  }

  return false;
};

// Example
findIncreasingTriplet([5, 2, 8, 4, 3, 7]);

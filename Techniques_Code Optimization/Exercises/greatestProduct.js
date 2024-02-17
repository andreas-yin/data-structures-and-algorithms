// Time complexity: O(n)
// Space complexity: O(1)
const greatestProduct = (array) => {
  let greatestNumber = -Infinity;
  let secondToGreatestNumber = -Infinity;

  let lowestNumber = Infinity;
  let secondToLowestNumber = Infinity;

  // Greedy approach
  for (const number of array) {
    if (number >= greatestNumber) {
      secondToGreatestNumber = greatestNumber;
      greatestNumber = number;
    } else if (number > secondToGreatestNumber) {
      secondToGreatestNumber = number;
    }

    if (number <= lowestNumber) {
      secondToLowestNumber = lowestNumber;
      lowestNumber = number;
    } else if (number > lowestNumber && number < secondToLowestNumber) {
      secondToLowestNumber = number;
    }
  }

  // Pattern recognized from generating examples
  const greatestProductFromTwoHighest = greatestNumber * secondToGreatestNumber;
  const greatestProductFromTwoLowest = lowestNumber * secondToLowestNumber;

  if (greatestProductFromTwoHighest > greatestProductFromTwoLowest) {
    return greatestProductFromTwoHighest;
  } else {
    return greatestProductFromTwoLowest;
  }
};

// Examples
greatestProduct([3, -10, -6, 9, 4]); // should return 60
greatestProduct([2, 6 - 4, 9, 10, 11]); // should return 110
greatestProduct([-3, 10, 1]); // should return 10
greatestProduct([-3, 2, 10, 1]); // should return 20
greatestProduct([-3, 2, -10, 1]); // should return 30
greatestProduct([1, -3]); // should return -3

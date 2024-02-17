// Time complexity: 0(n)
const max = (array) => {
  let greatestNumber = array[0];

  for (const num of array) {
    if (num > greatestNumber) {
      greatestNumber = num;
    }
  }

  return greatestNumber;
};

max([5, 4, 9, 3, 6]);

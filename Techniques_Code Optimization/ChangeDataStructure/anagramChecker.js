// Helper functions
const isEqual = (obj1, obj2) => {
  var props1 = Object.getOwnPropertyNames(obj1);
  var props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (var i = 0; i < props1.length; i++) {
    let val1 = obj1[props1[i]];
    let val2 = obj2[props1[i]];
    let areObjects = isObject(val1) && isObject(val2);

    if (
      (areObjects && !isEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
};

const isObject = (object) => {
  return object != null && typeof object === 'object';
};

// Main function
// Time complexity: 0(n + m)
// Space complexity: O(n + m)
const areAnagrams = (firstString, secondString) => {
  const firstWordHashTable = {};
  const secondWordHashTable = {};

  for (const char of firstString) {
    if (firstWordHashTable[char]) {
      firstWordHashTable[char]++;
    } else {
      firstWordHashTable[char] = 1;
    }
  }

  for (const char of secondString) {
    if (secondWordHashTable[char]) {
      secondWordHashTable[char]++;
    } else {
      secondWordHashTable[char] = 1;
    }
  }

  return isEqual(firstWordHashTable, secondWordHashTable);
};

// Example
areAnagrams('rattles', 'startle'); // should return true

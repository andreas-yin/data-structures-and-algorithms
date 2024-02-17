// Time complexity: O(n + m)
// Space complexity: O(n)
const findPlayersInBothSports = (playersSport1, playersSport2) => {
  const hashTable = {};
  const playersInBothSports = [];

  for (const { firstName, lastName } of playersSport1) {
    hashTable[firstName + ' ' + lastName] = true;
  }

  for (const { firstName, lastName } of playersSport2) {
    // Magical lookups
    if (hashTable[firstName + ' ' + lastName]) {
      playersInBothSports.push(firstName + ' ' + lastName);
    }
  }

  return playersInBothSports;
};

// Example
const basketPlayers = [
  { firstName: 'Jill', lastName: 'Huang', team: 'Gators' },
  { firstName: 'Janko', lastName: 'Barton', team: 'Sharks' },
  { firstName: 'Wanda', lastName: 'Vakulskas', team: 'Sharks' },
  { firstName: 'Jill', lastName: 'Moloney', team: 'Gators' },
  { firstName: 'Luuk', lastName: 'Watkins', team: 'Gators' },
];

const footballPlayers = [
  { firstName: 'Hanzla', lastName: 'Radosti', team: '32ers' },
  { firstName: 'Tina', lastName: 'Watkins', team: 'Barleycorns' },
  { firstName: 'Alex', lastName: 'Patel', team: '32ers' },
  { firstName: 'Jill', lastName: 'Huang', team: 'Barleycorns' },
  { firstName: 'Wanda', lastName: 'Vakulskas', team: 'Barleycorns' },
];

findPlayersInBothSports(basketPlayers, footballPlayers);

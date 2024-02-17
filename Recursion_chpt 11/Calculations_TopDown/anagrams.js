const anagramsOf = string => {    
    //Base case: if the string is only 1 character
    if (string.length === 1) {
        return [string];
    }

    const collection = [];
    const substringAnagrams = anagramsOf(string.slice(1));

    for (const substringAnagram of substringAnagrams) {
        for (let i = 0; i < substringAnagram.length + 1; i++) {
            const newAnagram = substringAnagram.slice(0, i) + string[0] + substringAnagram.slice(i);
            collection.push(newAnagram);
        }
    }

    return collection;
};

anagramsOf('abcde');
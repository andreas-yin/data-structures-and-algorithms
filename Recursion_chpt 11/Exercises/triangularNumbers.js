//n is the position within the sequence
const calculateTriangularNumber = n => {
    //Base case:
    if (n === 1) {
        return 1;
    }

    return n + calculateTriangularNumber(n - 1); 
};

calculateTriangularNumber(7);
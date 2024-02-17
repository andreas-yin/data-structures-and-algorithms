const golomb = (n, memo = new Map()) => {
    if (n === 1) {
        return 1;
    }

    if (!memo.get(n)) {
        memo.set(n, 1 + golomb(n - golomb(golomb(n-1, memo), memo)), memo);
    }

    return memo.get(n);
};

golomb(10);
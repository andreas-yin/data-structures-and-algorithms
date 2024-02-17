const countX = string => {
    //Base case
    if (string.length === 0) {        
        return 0;       
    }
    
    if (string[0] === 'x') {
        return 1 + countX(string.slice(1));
    } else {
        return countX(string.slice(1));
    }   
};

countX('axbxcxd');


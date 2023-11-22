const fibonacci = function(number) {
    let last = 0;
    let n;
    let temp = 1;

    if (number < 0) return "OOPS";
    if (number === 1) return 1;

    for (let i=1; i<=number; i++) {
        n = last + temp;
        temp = last;
        last = n;
    }
    
    return n;
};

// Do not edit below this line
module.exports = fibonacci;

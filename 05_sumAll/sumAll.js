const sumAll = function(startNumber, finishNumber) {
    let sum = 0;
    let bigger;
    let smaller;

    if (startNumber < 0 || finishNumber < 0 || typeof startNumber !== "number" || typeof finishNumber !== "number") {
        return "ERROR";
    }

    if (startNumber > finishNumber) {
        bigger = startNumber;
        smaller = finishNumber;
    } else {
        bigger = finishNumber;
        smaller = startNumber;
    }

    for(let i = smaller; i<=bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

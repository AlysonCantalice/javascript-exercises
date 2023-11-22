const repeatString = function(string, num) {
    let temporaryString = "";
    if (num === 0) {
        return temporaryString;
    } else if (num < 0) {
        return "ERROR";
    }
    for (let i=0; i<num; i++) {
        temporaryString += string;
    } return temporaryString;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(text) {
    let textLength = text.length;
    let reversedString = "";

    for (let i=textLength-1; i>=0; i--) {
        reversedString += text.charAt(i);
    } 
    
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (word) {
    word = word.toLowerCase().replaceAll(" ", "").replaceAll(",", "").replaceAll("!", "").replace(".", "") + "";
    const reversedWord = word.split("").reverse().join("");
    return reversedWord === word;
};

// Do not edit below this line
module.exports = palindromes;

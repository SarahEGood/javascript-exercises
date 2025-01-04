function reverseString(words) {
    stringArray = words.split('');
    outputString = '';
    for (let i = 1; i <= stringArray.length; i++) {
        outputString += stringArray.at(-i);
    }
    return outputString;
};

const palindromes = function (words) {
    cleanedWords = words.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    reversed = reverseString(cleanedWords);
    if (cleanedWords == reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

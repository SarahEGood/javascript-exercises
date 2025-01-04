const reverseString = function(words) {
    stringArray = words.split('');
    outputString = '';
    for (let i = 1; i <= stringArray.length; i++) {
        outputString += stringArray.at(-i);
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;

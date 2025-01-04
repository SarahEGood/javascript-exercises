const repeatString = function(words, times) {
    outputString = '';
    if (times < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < times; i++) {
            outputString += words;
        }
        return outputString;
    }

};

// Do not edit below this line
module.exports = repeatString;

const removeFromArray = function(myArray, ...args) {
    newArray = [];
    for (let i=0; i<myArray.length; i++) {
        if (!args.includes(myArray[i])) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

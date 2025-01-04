const sumAll = function(ind1, ind2) {
    if ((typeof ind1 != 'number') || (typeof ind2 != 'number')) {
        return 'ERROR';
    } else if ((ind1 < 0) || (ind2 < 0) ||
                (!Number.isInteger(ind1)) || (!Number.isInteger(ind2))) {
        return 'ERROR';
    } else {
        totalSum = 0;
        numSorted = [ind1, ind2].sort();
        for (let i = numSorted[0]; i <= numSorted[1]; i++) {
            totalSum += i;
        }
        return totalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;

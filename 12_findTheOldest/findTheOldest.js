const findTheOldest = function(people) {
    let greatestAge = 0;
    let person = {};
    for (let i=0; i < people.length; i++) {
        currentAge = 0;
        if ("yearOfDeath" in people[i]) {
            currentAge = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
        } else {
            currentAge = 2025 - people[i]["yearOfBirth"];
        }

        if (currentAge > greatestAge) {
            person = people[i];
            greatestAge = currentAge;
        }
    }

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;

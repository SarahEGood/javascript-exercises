const getTheTitles = function(bookList) {
    bookArray = []
    for (let i = 0; i < bookList.length; i++) {
        bookArray.push(bookList[i]['title']);
    }
    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;

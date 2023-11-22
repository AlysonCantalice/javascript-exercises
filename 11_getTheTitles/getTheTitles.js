const getTheTitles = function(books) {
    let titles = [];
    for (let i=0; i<books.length; i++) {
        for (let title in books[i]) {
            if (title === "title") {
                titles.push(books[i][title]);
            }
        }
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

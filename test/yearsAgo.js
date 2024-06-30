// function yearsAgo (year) {
// const currentYear = new Date().getFullYear();
// return currentYear - year;
// }

function yearsAgo(year) {
    var currentYear = new Date().getFullYear();
    var yearsDifference = currentYear - year;
    return yearsDifference;
}
console.log(yearsAgo(2024));
console.log(yearsAgo(2000));

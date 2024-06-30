// function fromwhere (regNumber) {
// if (regNumber.startsWith('CY')) {
//     return 'Bellville';
// } else if (regNumber.startsWith('CJ')) {
//     return 'Paarl';
// } else if (regNumber.startsWith('CA')) {
//     return 'Cape Town';
// } else {
//     return 'Some other place!';
// }
// };


function fromWhere(regNo) {
    if (regNo.startsWith('CY')) {
        return 'Bellville';
    } else if (regNo.startsWith('CJ')) {
        return 'Paarl';
    }
    else if (regNo.startsWith('CA')) {
        return 'Cape Town';
    }
    else {
        return 'Some other place!';
    }
}

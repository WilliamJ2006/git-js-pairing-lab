const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 400 != 0 && year % 100 === 0) {
        return false;
    } else if (year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 != 0) {
        return true;
    } else
        return false;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
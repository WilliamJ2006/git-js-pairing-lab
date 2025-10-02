// const isLeapYear = (year) => {
//     if (year % 4 === 0 && year % 400 != 0 && year % 100 === 0) {
//         return false;
//     } else if (year % 400 === 0) {
//         return true;
//     } else if (year % 4 === 0 && year % 100 != 0) {
//         return true;
//     } else
//         return false;
// }

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 != 0 || year % 400 === 0);
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log('========== P12');

const absoluteNineteen = (num) => {
    let finalNum = 0;
    finalNum = Math.abs(num - 19);
    if (finalNum > 19) {
        finalNum = finalNum * 3;
    }
    return finalNum;
}

console.log(absoluteNineteen(54));
console.log(absoluteNineteen(10));
console.log(absoluteNineteen(5));
console.log('========== P14');

const changeString = (string) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = '';
    lowerCaseString = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (lowerCaseString[i] === alphabet[j]) {
                newString += alphabet[j + 1];
            }
        }
    }
    return newString;
}

console.log(changeString('Hello'));
console.log(changeString("helloworld"));
console.log(changeString("abc"));
console.log('========== P16');

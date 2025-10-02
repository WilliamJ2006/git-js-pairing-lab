console.log("bounus questions");

const printTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = `0${hours}`;
    };
    if (minutes < 10) {
        minutes = `0${minutes}`
    };
    if (seconds < 10) {
        seconds = `0${seconds}`
    };
    const time = `${hours}:${minutes}:${seconds}`;
    console.log(time);
}
printTime();



console.log("P11 ========= P11");

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 != 0 || year % 400 === 0);
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log('========== P12');


const getExtention = (string) => {
    let myString = '';
    let character = '.';
    let place = '';
    for (i = 0; i <= string.indexOf(character); i++) {
        place = i;
    }
    return myString = string.slice(place);
};
console.log(getExtention('text.ksdj'))


console.log("P13 ====== P13")

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

const switchLetter = (string) => {
    const firstLetter = string[0];
    const lastLetter = string[string.length - 1];
    const middleLetters = string.substring(1, string.length - 1);
    const word = lastLetter + middleLetters + firstLetter;

    console.log(word);
}

switchLetter("hello world")
console.log("===P15")

const changeString = (string) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = '';
    let lowerCaseString = string.toLowerCase();
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

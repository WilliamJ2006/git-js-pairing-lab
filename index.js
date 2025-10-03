//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
    console.log('========== P1');
}

fiveToOneHundred();

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
    console.log('========== P2');
}

multiplesOfThree();

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
    console.log('========== P3');
}

multiplesOfThreeOrFive();

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
    console.log('========== P4');
}

untilNum(42);

const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2, 3))
console.log('========== P5');

const add = (a, b) => {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}
console.log(add(5, 5));
console.log(add(2, 4));
console.log('========== P6');

const isNegative = (n) => {
    if (n < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isNegative(1));
console.log('========== P7');

const triangeArea = (a, b) => {
    return (a * b) / 2;
}
console.log(triangeArea(5, 7));
console.log(triangeArea(6, 8));
console.log('=========== P8');

const betweenTwentyAndFourty = (k) => {
    if (k > 20 && k < 40) {
        return true;
    }
    else {
        return false;
    }
};
console.log(betweenTwentyAndFourty(20));
console.log(betweenTwentyAndFourty(21));
console.log('========== P9');

const largest = (num1, num2, num3) => {
    let arr = [num1, num2, num3];
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largest(4, 6, 8));
console.log(largest(30, 22, 17));
console.log(largest(41, 108, 86));
console.log('========== P10');

console.log("Bonus Questions");
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
        if (lowerCaseString[i] === ' ') {
            newString += ' ';
        }
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
console.log('=========== P16');
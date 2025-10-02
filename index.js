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
console.log('========== P8');

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
//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
    console.log('==========');
}

fiveToOneHundred();

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
    console.log('==========');
}

multiplesOfThree();

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
    console.log('==========');
}

multiplesOfThreeOrFive();

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
    console.log('==========');
}

untilNum(42);

const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2, 3))
console.log('==========');

const add = (a, b) => {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}
console.log(add(5, 5));
console.log(add(2, 4));
console.log('==========');
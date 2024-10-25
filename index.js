import readlineSync from 'readline-sync';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const calculate = (operation, firstNum, secondNum) =>{
    switch (operation) {
        case '+':
        return  firstNum + secondNum;
        case '-':
        return  firstNum - secondNum;
        case '*':
        return  firstNum * secondNum;
        default:
            return `operator ${operation} is not use`;
    }
};
const answer = readlineSync.question('Your answer: ');

    const arithmeticsing = ['+', '-', '*'];
    const operation = arithmeticsing[getRandomArbitrary(0, arithmeticsing.length - 1)];
    const firstNum = getRandomArbitrary(0, 100);
    const secondNum = getRandomArbitrary(0, 100);
    const qwestion = `${firstNum} ${operation} ${secondNum}`;
    const qwestionRight = calculate(operation, firstNum, secondNum)

console.log(qwestion);
console.log(qwestionRight);
console.log(typeof(qwestion));
console.log(typeof(qwestionRight));
console.log(typeof(answer));
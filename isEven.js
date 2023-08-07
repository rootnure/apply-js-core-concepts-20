// console.log(10/2);
// console.log(94/2);
// console.log(12/2);
// console.log(794/2);

// console.log(10%2);
// console.log(94%2);
// console.log(12%2);
// console.log(794%2);

// console.log(11/2);
// console.log(93/2);
// console.log(21/2);
// console.log(7941/2);

function isEven(number) {
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    } else {
    return false;
    }
    // return number % 2 === 0;
}

const num1IsEven = isEven(55);
console.log(num1IsEven);
const num2IsEven = isEven(580);
console.log(num2IsEven);
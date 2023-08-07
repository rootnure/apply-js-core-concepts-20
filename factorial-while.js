// for loop
function findFactorialReverse(number) {
    let result = 1;
    for(let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

// while loop reverse
function findFactorial(number) {
    let result = 1;
    let i = number;
    while(i >= 1){
        result *= i;
        i--;
    }
    return result;
}

const factorial = findFactorialReverse(6);
console.log(factorial);

const fact = findFactorial(6);
console.log(fact);
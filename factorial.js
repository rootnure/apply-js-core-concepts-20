// 1 * 2 * 3 * 4 * 5 * 6 * 7

function findFactorial(number) {
    let fact = 1;
    for(let i = number; i >= 1; i--){
        fact *= i;
    }
    return fact;
}

const factorial = findFactorial(5);
console.log(factorial);
// 1 * 2 * 3 * 4 * 5 * 6 * 7

function findFactorial(number) {
    let fact = 1;
    for(let i = number; i >= 1; i--){
        fact *= i;
    }
    return fact;
}

// function multiplicationOfNumbers(number) {
//     let result = 1;
//     for (let i = 1; i<=number; i++){
//         result = result * i;
//     }
//     return result;
// }

console.log(factorial, multiplicationOfNumbers(10));
const factorial = findFactorial(10);
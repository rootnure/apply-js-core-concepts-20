function getSum(number) {
    let sum = 0;
    for(let i = 1; i < number; i++) {
        sum += i;
    }
    return sum;
}

const sum = getSum(6);
console.log(sum);
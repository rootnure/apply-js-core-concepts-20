function getNumberArraySum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const number = numbers[index];
        sum += number;
    }
    return sum;
}

function getOddArrayFromFullArray(fullArrayOfNumbers) {
    const oddArray = [];
    for(let i = 0; i < fullArrayOfNumbers.length; i++) {
        const index = i;
        const value = fullArrayOfNumbers[index];
        if(value % 2 === 0) {
            continue;
        }
        else {
            oddArray.push(value);
        }
    }
    return oddArray;
}

function findOddArraySum(fullArray) {
    const oddArray = getOddArrayFromFullArray(fullArray);
    const oddArraySum = getNumberArraySum(oddArray);
    return oddArraySum;
}

const arr = [32, 16, 58, 74, 96, 15, 68, 33, 17, 94, 6, 16];

const arrSum = getNumberArraySum(arr);
console.log(arrSum);

const oddArray = getOddArrayFromFullArray(arr);
console.log(oddArray);

const oddSum = findOddArraySum(arr);
console.log(oddSum);
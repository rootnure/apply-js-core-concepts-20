/* 
const myInches = 12;
const myFeet = myInches / 12;
console.log('myFeet', myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dadaFeet', dadaFeet);

const dadiInch = 60;
const dadiFeet = dadiInch / 12;
console.log('dadiFeet', dadiFeet);
*/

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('dada feet', dadaFeet);

const dadiInch = 60;
const dadiFeet = inchToFeet(dadiInch);
console.log('dadi feet', dadiFeet);

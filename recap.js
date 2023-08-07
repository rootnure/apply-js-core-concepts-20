// 1. Variable
const myName = 'rootnure';

// math operation: +, -, *, /
// shorthand: +=, -=, *=, /=
// ++, --

// 2. Array
const friends = ['Abul', 'Babul', 'Cabul', 'Dabul'];
const ages = [43, 65, 46, 72, 34];

const secondFriend = friends[2]; // get value by index
friends[3] = 'Kabul'; // set value by index

// 3. Conditionals
// >, <, >=, <=, ==, ===, !=, !==
if(friends.length < 2 ){
    console.log('fokir to kono friend nai');
} else {
    console.log('Onk friend');
}

// 4. Loop
let loopVariable = 0; // declare loop variable
while(loopVariable <= 6) { // loop condition
    console.log(loopVariable); // loop body
    loopVariable++; // loop variable manipulation
}

for (let i = 0; i <= 6; i++) { // loop variable, loop condition, loop variable manipulation in single line
    console.log(i);
}

// 5. Function
function isMoodGood(gift) {
    if(gift === 'rose'){
        return true;
    } else {
        return false;
    }
}

// 6. Object
const friend = {
    name: 'Kabul',
    age: 34,
    height: '160cm',
    weight: '80KG'
}
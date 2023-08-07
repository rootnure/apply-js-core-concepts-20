// 1

function hourToMinute(hours) {
    const minutes = hours * 60
    return minutes;
}

// 2
function hourToSecond(hours) {
    const minutes = hourToMinute(hours);
    const seconds = minutes * 60;
    return seconds;
}

// 3
function minutesToHour(minutes) {
    const hours = minutes / 60;
    return hours;
}

// 4
function findLeapYear(yearArray) {
    const leapYears = [];
    for(let i = 0; i < yearArray.length; i++) {
        const index = i;
        const year = yearArray[index];
        if(year % 4 === 0) {
            if(year % 400 === 0) {
                leapYears.push(year);
            }
            else if (year % 100 === 0) {
                continue;
            }
            else {
                leapYears.push(year);
            }
        }
        else {
            continue;
        }
    }
    return leapYears;
}


// testing
const myMinutes = hourToMinute(5);
const mySeconds = hourToSecond(10);
const myHours = minutesToHour(180);
console.log(myMinutes, mySeconds, myHours);

const years = [2000, 2091, 2100, 1974, 1224, 1981];
const leapYears = findLeapYear(years);
console.log(leapYears);
// function numeroAleatorio(min, max) {
//     return (Math.random() * (max - min) + min).toFixed(0);
// }

const moment = require("moment");

// numbers = {};

// for (let i = 0; i < 10; i++) {
//     let num = numeroAleatorio(1, 20);
//     if (numbers[num]) {
//         numbers[num]++;
//     } else {
//         numbers[num] = 1;
//     }
// }

// console.log(numbers);

// require moment
// require moment library

function daysAndYearsSinceBirth(birthDay, birthMonth, birthYear) {
    console.log(`Hoy es ${moment().format("MMM Do YY")}`);
    console.log(`Tu nacimiento fue el ${moment(`${birthDay}-${birthMonth}-${birthYear}`, "DD-MM-YYYY").format("MMM Do YY")}`);
    console.log(`Desde tu nacimiento pasaron ${moment().diff(moment(`${birthDay}-${birthMonth}-${birthYear}`, "DD-MM-YYYY"), "years")} años`);
    console.log(`Desde tu nacimiento pasaron ${moment().diff(moment(`${birthDay}-${birthMonth}-${birthYear}`, "DD-MM-YYYY"), "days")} días`);
}

daysAndYearsSinceBirth(30, 3, 2000)

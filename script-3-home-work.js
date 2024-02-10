let tempCelsius = 25;

const tempFahrenheit = (tempCelsius * 9/5) + 32;

console.log('Температура виведена у фаренгейтах', tempFahrenheit );
// exercise 1



const daysInMonth = 30;
const hoursInDays = 24;
const minutesInHour = 60;

let totalHours = daysInMonth * hoursInDays;
let totalMinutes = totalHours * minutesInHour;

console.log("У цьому місяці", totalHours, "годин");
console.log("У цьому місяці", totalMinutes, "хвилин");
// exercise 2



let healthLevel = 100;
let energyLevel = 80;

let healthTaken = 20;
let energyTaken = 30;

healthLevel -= healthTaken;
energyLevel -= energyTaken;

console.log('рівень здоровя гравця', healthLevel )
console.log('рівень енергії гравця', energyLevel )
//exercise 3



let item = 1000;
let discount = 0.1;
const discountedAmount = item * (1 - discount)
console.log('Сума зі знижкою', discountedAmount)
//exercise 4



const number = 3.75;
const roundedNumber = (Math.floor(number));
console.log(roundedNumber);
//exercise 5



const stringNumber = '3.75';
const floatNumber = (parseFloat(stringNumber));
console.log(floatNumber);
//exercise 6


const num = '18';
const floatNum = parseInt(num);
console.log(floatNum);
//exercise 7



const zxc = 1234;
const totalZxc = Math.sqrt(zxc);
console.log(totalZxc);
//exercise 8



const integerValue = 100;
const stringValue = '42';
const totalIntegerValue = parseInt(integerValue);
const totalStringValue = stringValue.toString();
console.log(totalIntegerValue)
console.log(totalStringValue)
//exercise 9
'use strict'

const message = "Mango " + "is " + "happy ";
console.log(message);

let result;
result = 5 + '5';
console.log(result)
console.log(typeof result);

result = 5 + '5' + 5
console.log(result)
console.log(typeof result)

result = 5 / '2';
console.log(result);
console.log(typeof result);

result = 6 - '2';
console.log(result)
console.log(typeof result)

const str = "Успіх - це не випадковість, а результат постійного старання";
const author = 'наполеон Хілл';
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('випадковість'))


const string = 'Успіх - це не випадковість, а результат постійної праці';
console.log(string.startsWith('це'));
console.log(string.endsWith('аці'));


//slice
console.log(string.slice(0,26));
const text = "             Hello, welcome              ";
console.log(text);
console.log(text.trim());

const title = "Welcome";
console.log(title.padEnd(20, '!'));
console.log(title.padStart(10, '@'));

const name = "Mango";
const age = 2;
const mood = "happy";

const messageX2 = 'My name is' + name + ", I'm" + age + 'years old and' + mood + '.';
const sameMessage = `My name is ${name}, Im ${age} years old and ${mood}.`;
console.log(messageX2);
console.log(sameMessage);

let quesList = `Гості:
    1) Іван
    2) Петро
    3) Марія`;
console.log(quesList);

let sameQuesList = "Гості: \n 1) Іван \n  2) Петро \n 3) Марія";
console.log(sameQuesList)
//
//
// const totalMinutes = prompt("Введіть кількість хвилин", "")
//
// const numberHours = totalMinutes / 60;
// const days = Math.floor(numberHours / 24);
// const hour = Math.floor(numberHours % 24);
// const modHours = String(hour).padStart(2, '0');
// const minutes = totalMinutes % 60;
// const modMinutes = String(minutes).padStart(2, '0');
//
// const resultX2 = `${days} днів ${modHours} : ${modMinutes}`;
// alert(resultX2);


const nameX2 = "Rostyslav";
console.log(nameX2.replace("R", "@"));


const subtitle = "JavaScript";
console.log(subtitle.substring(0, 4));


const x = "Rostyslav";
const y = "Petrushka";
const n = "Hotel";
const g = 49;
const total = `Гість ${x} ${y} поселяється в ${n} номер ${g} `;
console.log(total);


// const answer = prompt("Введіть текст щоб видалити пробіли");
// alert(answer.trim());



const balance = "Ваш баланс поповнено на 1";
console.log(balance.padEnd(100, '000'));
console.log(balance.length);
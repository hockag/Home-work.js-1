'use strict'

console.log("I trulsy" && '');

console.log("I truthy" && false && ['I also truthy']);
console.log("I truthy" && true && ['I also truthy']);

const i = 5;
if (i>60 && i <100);


console.log(false || false || true);
console.log(false || "I truthy" || false);
console.log(false || "" || undefined || null);
console.log('Я правдивий' || 'Спанч боб' || 'Рікі і морті' );


console.log(!true);
console.log(!false);
console.log(!1);
console.log(!0);

// if
if (true) {
    console.log('Hello!');
}

const year = 2015;

if (year === 2015) {
    console.log('Вірно');
}

if (100<50) {
    console.log('Перша умова вірна');
}   else {
    console.log('Перша умова НЕ вірна');
}

if (year === 2015) {
    console.log('Вірно');
} else {
    console.log('Як можна так помилятися');
}

const salary = 500;

if (salary >= 1000 && salary <2000) {
    console.log('Рівень один');
} else if (salary >= 2000 && salary < 3000) {
    console.log('рівень два');
} else if (salary > 3000) {
    console.log('рівень три');
} else {
    console.log('Працюй більше');
}

if (year < 2015) {
    console.log('Зарано');
} else if (year > 2015) {
    console.log('Зарано');
} else {
    console.log('Саме так');
}

let age = 14;

let accessAge = age > 18 ? console.log(true) :console.log(false);

const ageUser = prompt('Вік?', '18')

let answer = age < 3 ? 'привіт крихітко!' : ageUser < 18 ? 'Вітаю' : ageUser < 100 ? ' Моє шанування!' : 'Який незвичайний вік!';

alert(answer);


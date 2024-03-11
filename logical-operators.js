// 'use strict'
//
// console.log("I trulsy" && '');
//
// console.log("I truthy" && false && ['I also truthy']);
// console.log("I truthy" && true && ['I also truthy']);
//
// const i = 5;
// if (i>60 && i <100);
//
//
// console.log(false || false || true);
// console.log(false || "I truthy" || false);
// console.log(false || "" || undefined || null);
// console.log('Я правдивий' || 'Спанч боб' || 'Рікі і морті' );
//
//
// console.log(!true);
// console.log(!false);
// console.log(!1);
// console.log(!0);
//
// // if
// if (true) {
//     console.log('Hello!');
// }
//
// const year = 2015;
//
// if (year === 2015) {
//     console.log('Вірно');
// }
//
// if (100<50) {
//     console.log('Перша умова вірна');
// }   else {
//     console.log('Перша умова НЕ вірна');
// }
//
// if (year === 2015) {
//     console.log('Вірно');
// } else {
//     console.log('Як можна так помилятися');
// }
//
// const salary = 500;
//
// if (salary >= 1000 && salary <2000) {
//     console.log('Рівень один');
// } else if (salary >= 2000 && salary < 3000) {
//     console.log('рівень два');
// } else if (salary > 3000) {
//     console.log('рівень три');
// } else {
//     console.log('Працюй більше');
// }
//
// if (year < 2015) {
//     console.log('Зарано');
// } else if (year > 2015) {
//     console.log('Зарано');
// } else {
//     console.log('Саме так');
// }
//
// let age = 14;
//
// let accessAge = age > 18 ? console.log(true) :console.log(false);
//
// const ageUser = prompt('Вік?', '18')
//
// let answer = age < 3 ? 'привіт крихітко!' : ageUser < 18 ? 'Вітаю' : ageUser < 100 ? ' Моє шанування!' : 'Який незвичайний вік!';
//
// alert(answer);
//
// // lesson logical operators
//
//
// // Використовуючи if..else, напишіть код, що отримує число з інпуту і потім виводить повідомлення на екран:
// // 1, якщо значення більше нуля,
// // -1, якщо меньше нуля,
// // 0, якщо дорівнює нулю.
//
// // let number = prompt('Введіть число');
// //
// // if (number > 1) {
// //     alert(1);
// // } else if (number < 0) {
// //     alert(-1);
// // } else {
// //     alert(0);
// // }
// // // 1
// //
// //
// // const name = prompt('Яка "офіційна" назва JavaScript?');
// //
// // if (name === 'ECMAScript') {
// //     alert('Привильно!');
// // } else {
// //     alert('Ви не знаєте? ECMAScript!');
// // }
//
// // Перепишіть конструкцію if, використовуючи умовний оператор '?':
// // let result;
// // if (a + b < 4) {
// // result = 'Нижче';
// // } else {
// // result = 'Вище';
// // }
//
// // const a = 12;
// // const b = 72
// // let result = (a + b < 4 ) ? 'Нижче' : 'Вище';
//
// const number = prompt('Введіть число');
// const x1 = prompt('Введіть x1');
// const x2 = prompt('Ввдеіть x2');
//
// if (number < x1) {
//     alert("Число менше x1");
// } else if (number > x1 && number < x2) {
//     alert("Число від x1 до x2");
// } else if (number > x2) {
//     alert("Число більше x2");
// } else if (number < x1 || number > x2) {
//     alert("Число менше x1 або більше x2");
// } else {
//     alert("Число дорівнює x1 або x2");
// }


const isOnline = false;
const isFriend = true;
const isDnd = false;

if (isFriend && isOnline && !isDnd) {
    console.log('Можна відкрити чат');
} else {
    console.log('Не можна відкрити чат');
}


let subscribeType = prompt('Введіть тип підписки, (free, pro, vip)');
if (subscribeType === 'pro' || subscribeType === 'vip') {
    alert('У вас є доступ');
} else {
    alert('У вас немає доступу');
}


let balance = prompt('Введіть баланс');
let payment = prompt('Введіть суму покупки');

console.log(`Загальна суму покупки ${payment}, перевіряємо кількість доступних коштів на балансі`);

if (balance >= payment) {
    balance -= payment;
    alert(`На рахунку залишилося ${payment}`);
} else {
    alert('На рахунку недостатньо коштів');
}

console.log('Операція завершена');
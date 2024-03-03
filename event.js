'use strict';

// const singleBtn = document.querySelector('.btn--single');
// const multipleBtn = document.querySelector('.btn--multiple');
//
// function handleClick() {
//     alert('Click!')
// }
//
// singleBtn.addEventListener('click', handleClick);
// multipleBtn.addEventListener('click', () => {
//     alert('First callback!');
// })
//
// multipleBtn.addEventListener('click', () => {
//     alert('Second callback!');
// })
//
// multipleBtn.addEventListener('click', () => {
//     alert('Third callback!');
// })
//
// multipleBtn.onclick = function () {
//     alert('Thanks')
// }
//
// // 2 removeEventListener()
//
// const addBtn = document.querySelector('[data-action="add"]');
// const removeBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');
//
// addBtn.addEventListener('click', (event) => {
//     //vent.target – “цільовий” елемент, який ініціював подію, він не змінюється в процесі спливання.
//     // this – “поточний” елемент, той, на якому в даний момент виконується обробник.
//     event.type;
//     event.target;
//     btn.addEventListener('click', handleClick);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(this);
//     console.log(event);
// })
//
// removeBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', handleClick);
// })
//
// const link = document.querySelector('.link');
// link.addEventListener('click', function (event){
//     event.preventDefault();
// })
//submit

const form = document.querySelector('.form');
const loginInput = document.querySelector('[type="text"]');
const passInput = document.querySelector('input[type="password"]');

function handleSubmit() {
    event.preventDefault()
    const login = loginInput.value.trim();
    const password = passInput.value;

    form.reset();

    alert(`Дякуємо за реєстрацію:
    Логін ${login}
    Пароль ${password}`);

}

form.addEventListener('submit', handleSubmit)


const focusButton = document.querySelector('.focus--btn');
const blurButton = document.querySelector('.blur--btn');


focusButton.addEventListener('click', function () {
   loginInput.focus();
    console.log("input is focused");
});

blurButton.addEventListener('click', function () {
    blurButton.blur();
    console.log('Input is blured')
});


loginInput.addEventListener('change', function()  {
    const newValue = event.target.value;
    console.log('Input value change:', newValue);
});

loginInput.addEventListener('input', function()  {
    const newValue = event.target.value;
    console.log('Input value change:', newValue);
});


document.addEventListener('keydown', (event) => {
   if (event.key === "Enter") {
       console.log('Enter було натиснуто')
   }
});

const box = document.querySelector('.box');

let leftPosition = box.offsetLeft; // початкова позиція

function translatePosition() {
    if (event.key === "ArrowRight") {
        leftPosition += 10;
        box.style.left = leftPosition + 'px';
    } else if (event.key === "ArrowLeft") {
        leftPosition -= 10;
        box.style.left = leftPosition + 'px';
    }
}

document.addEventListener('keydown', translatePosition);


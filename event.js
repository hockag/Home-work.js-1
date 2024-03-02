'use strict';

const singleBtn = document.querySelector('.btn--single');
const multipleBtn = document.querySelector('.btn--multiple');

function handleClick() {
    alert('Click!')
}

singleBtn.addEventListener('click', handleClick);
multipleBtn.addEventListener('click', () => {
    alert('First callback!');
})

multipleBtn.addEventListener('click', () => {
    alert('Second callback!');
})

multipleBtn.addEventListener('click', () => {
    alert('Third callback!');
})

multipleBtn.onclick = function () {
    alert('Thanks')
}

// 2 removeEventListener()

const addBtn = document.querySelector('[data-action="add"]');
const removeBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector('#btn');

addBtn.addEventListener('click', (event) => {
    //vent.target – “цільовий” елемент, який ініціював подію, він не змінюється в процесі спливання.
    // this – “поточний” елемент, той, на якому в даний момент виконується обробник.
    event.type;
    event.target;
    btn.addEventListener('click', handleClick);
    console.log(event.type);
    console.log(event.target);
    console.log(this);
    console.log(event);
})

removeBtn.addEventListener('click', () => {
    btn.removeEventListener('click', handleClick);
})

const link = document.querySelector('.link');
link.addEventListener('click', function (event){
    event.preventDefault();
})
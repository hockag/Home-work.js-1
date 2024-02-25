"use strict"

//DOM

console.log(navigator.userAgent);

console.log(location.href);
// location.href = "https://www.youtube.com/;

// DOM навігація по документу

const htmlElement = document.documentElement;
console.log(htmlElement);

const headElement = document.head;
console.log(headElement);

const bodyElement = document.body;
console.log(bodyElement);


const title = document.querySelector('.title');
const parentElementNode = title.parentNode;
console.log(parentElementNode);

const childOList = document.querySelector('.list');
const childElementNode = childOList.childNodes;
console.log(childElementNode);

const childrenElement = childOList.children;
console.log(childrenElement);

const firstChild = childOList.firstChild;
const lastElementChild = childOList.lastChild;

const container = document.querySelector('.container');
const firstChildElement = container.firstElementChild;

console.log("Перший дочірні елемент", firstChildElement);

const secondElement = firstChildElement.nextElementSibling;
console.log("Другий дочірній елемент", secondElement);


const firstParagraph = document.querySelector('p');

console.log('перший елемент <p>', firstParagraph);

const allParagraph = document.querySelectorAll('p');
console.log('всі елементи <p>', allParagraph);

const secondParagraph = document.querySelector('.second');
const idText = document.querySelector('#third');
const idThird = document.getElementById('third');

const btnHidden = document.querySelector('.btn');
btnHidden.addEventListener('click', () => {
    container.hidden = !container.hidden;
})

//value

const btnChangeValue = document.querySelector('.button--change');
const inputValue = document.querySelector('.input');

btnChangeValue.addEventListener('click', () => {
    inputValue.value = "New Value";
})

//checked

const btnStateChange = document.querySelector('.btn--state');
const checkbox = document.querySelector('#checkbox');

btnStateChange.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
    console.log(checkbox.checked)
})

//name

const showBtnName = document.querySelector('.btn-show');
const userData = document.getElementById('usernameInput');

showBtnName,addEventListener('click', () => {
    console.log(userData.name);
    console.log(userData.value);
})

//src

let image = document.querySelector('.img');
image.addEventListener('click', () =>{
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&usqp=CAU'
} )

const text = document.querySelector('.text');




const example = document.querySelector('.example');
const checkBtn = document.querySelector('.checkButton');
const addBtn = document.querySelector('.addButton');
const removeBtn = document.querySelector('.removeButton');
const replaceBtn = document.querySelector('.replaceButton');
const toggleBtn = document.querySelector('.toggleButton');

checkBtn.addEventListener('click', () =>{
    const hasClass = example.classList.contains('highlight');
    console.log("Чи є клас 'highlight' в цього елемента?" + hasClass);
})

addBtn.addEventListener('click', () => {
    example.classList.add('italic');
});

replaceBtn.addEventListener('click', () => {
    example.classList.replace('highlight', 'bold');
});


toggleBtn.addEventListener('click', () => {
    example.classList.toggle('open');
});


example.style.color = 'green'
example.style.backgroundColor = 'yellow';

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
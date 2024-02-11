'use strict'


function sum(a, b) {
    return a + b;
}


function substract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divison(a, b) {
    return a / b;
}


const OPERATION = {
    sum: "+",
    substract: "-",
    multiply: "*",
    divison: "/"
}


function calculate ({a, b, operation}) {
    let result = null;

    switch (operation) {
        case OPERATION.sum:
            result = sum(a, b);
            break;

        case OPERATION.substract:
            result = substract(a, b);
            break;

        case OPERATION.multiply:
            result = multiply(a, b);
            break;

        case OPERATION.divison:
            result = divison(a, b);
            break;
        default:
            break;
    }
    return result;
}


const inputA = document.querySelector('.js__input--a');
const inputB = document.querySelector('.js__inout--b');
const selectOperation = document.querySelector('.js__select--operation');
const btn = document.querySelector('.js__btn--result');
const output = document.querySelector('.js__output');


btn.addEventListener('click', () => {
    const a =  +inputA.value;
    const b = +inputB.value;
    const operation = selectOperation.value;
    const result = calculate({
        a,
        b,
        operation
    })

    output.innerHTML = result;

})
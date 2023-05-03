const plusBtnElement = document.getElementById("plus");
const minusBtnElement = document.getElementById("minus");
const counterBtnElement = document.getElementById("container");

console.log(plusBtnElement);
console.log(minusBtnElement);
console.log(counterBtnElement);

let counter = 0;

const increment = ()=>counterBtnElement.innerText = ++counter;

const decrement = ()=> counterBtnElement.innerText = --counter;

plusBtnElement.addEventListener('click',increment);
minusBtnElement.addEventListener('click',decrement);
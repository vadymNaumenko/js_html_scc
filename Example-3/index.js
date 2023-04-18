
// мы можем создавать элементы с нуля и прикреплять их к документу html
// // создали пустой элемент p
// const newElement = document.createElement("p");
// newElement.textContent = "Я был создан при помощи JS";

// newElement.style.border = "2px solid red";
// document.body.append(newElement);
// const targetElement = document.getElementById('target-element');

// targetElement.append(newElement);

// const newButon = document.createElement('button');
// newButon.type = "button";
// newButon.textContent = "enter me";

// targetElement.append(newButon);



// мы можем создавать элементы с нуля и прикреплять их к документу html
// создали пустой элемент p
const newElement = document.createElement("p");
newElement.textContent = "Я был создан при помощи JS";
newElement.style.border = "2px solid red";
// мы создали элемент, осталось его прикрепить 
// мы прикрепили элемент внутрь body
document.body.append(newElement);

// Если хотим прикрепить не в бади, а в какой нибудь элемент -
// нужно его отливить при помощи getElementById
const targetElement = document.getElementById("target-element");
// и прикрепить новый элемент внутрь этого дивчика
// создали кнопку
const newBtn = document.createElement("button");
// добавили атрибут тип со значением "button"
newBtn.type = "button";
// добавили ей текст "Нажми меня"
newBtn.textContent = "Нажми меня";
// прикрепили ее
targetElement.append(newBtn);

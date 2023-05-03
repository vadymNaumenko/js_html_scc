// Spread syntax - синтаксис "распыление"

// Повторим примитивные и ссылочные типы
const fruits = ["apple", "orange", "mango"];
const fruits2 = fruits;

fruits2[0] = "banana";
console.log(fruits);
console.log(fruits2);

// КАК СКОПИРОВАТЬ ЭЛЕМЕНТЫ МАССИВА В НОВЫЙ МАССИВ?
const cars = ["bmw", "mercedes", "citroen"];
// как мне скопировать сами значения, но сделать новый независимый массив
// Для этого есть spread syntax
// spread operator это ...
// Этот массив не зависит от прдудыщего
const carsCopy = [...cars];
// Если мутируем второй массив - первый не изменится
carsCopy[0] = "porsche";
console.log(cars); // [ 'bmw', 'mercedes', 'citroen' ] - не изменился
console.log(carsCopy); // [ 'porsche', 'mercedes', 'citroen' ] - изменился только второй

// КАК ОБЪЕДИНИТЬ ДВА МАССИВА В ТРЕТИЙ С ПОМОЩЬЮ SPREAD
const cities1 = ["Berlin", "Paris"];
const cities2 = ["Viene", "Budapest"];

const joinedCities = [...cities1, ...cities2];
console.log(joinedCities); //[ 'Berlin', 'Paris', 'Viene', 'Budapest' ]

// МЫ МОЖЕМ СОЗДАТЬ МАССИВ И ДОБАВИТЬ В НЕГО ЭЛЕМЕНТ
const vegitables = ["cucumber", "tomato"];
const newVegitables = [...vegitables, "potato"];
console.log(newVegitables); // [ 'cucumber', 'tomato', 'potato' ]
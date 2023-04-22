const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

//Создайте на основе страрого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const brendAndGas = cars.map((car) => {
    return {
        brend: car.brand,
        isDiesel: car.isDiesel
    };
});
console.log(brendAndGas);
/////////////////////////////////////////

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const newArrCars = cars.filter((car) => car.isDiesel === true);
console.log(newArrCars);

///////////////////////////////////////////
// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const newArrCars2 = cars.filter((car) => car.isDiesel === false);
console.log(newArrCars2);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const price = cars
    .filter((car) => car.isDiesel === false)
    .map((notDisel) => notDisel.price)
    .reduce((acc, curent) => acc += curent);

console.log(price);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.
console.log(cars);
cars.forEach((car) => car.price += car.price / 100 * 20);
console.log(cars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const carWithTesla = cars.map((car) => car.isDiesel === true ? { brand: "Tesla", price: 25000, isDiesel: false } : car);
console.log(carWithTesla);
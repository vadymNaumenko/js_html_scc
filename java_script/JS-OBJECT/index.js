// Object-literal
// Мы можем создать объект без класса, используя нотация объект-литерал
const student = {
    age: 22,
    name: "Fred"
};

console.log(student.age);  // 22
console.log(student.name); // Fred
console.log(student.profession); // undefined
// например ключ может состоять из двух слов
// Если ключ имеет пробелы - его нужно взять в кавычки
const product = {
    title: "Iphone",
    price: 1000,
    "model of phone": "XR"
};

// получить значение по ключу
console.log(product.price);
console.log(product["model of phone"]);
// положить значение по ключу
product.diagonal = 19;
product["type of adapter"] = "lightning";
console.log(product);
// если у нас есть переменная и мы хотим доставать значения из объекта по этой перменной
let key = "age";
console.log(student[key]); // 22
key = "name";
console.log(student[key]); // Fred
//
const client = {
    firstName: "John",
    wife: "Maria"
};

const key1 = "wife";
// как достать по переменной из объекта
console.log(client.key1);  // undefined
console.log(client[key1]); // Maria
// получить массив всех ключей объекта
console.log(Object.keys(student)); //     [ 'age', 'name' ]
// получить массив всех значений объекта
console.log(Object.values(student)); //   [ 22, 'Fred' ]
// получить массив всех парк ключ-значение
console.log(Object.entries(student)); //  [ [ 'age', 22 ], [ 'name', 'Fred' ] ]
// Можно проверить есть ли определенный ключ внутри объекта.
// Хочу посмотреть есть ключ age внтури student?
// оператор in
console.log('age' in student); // true
console.log("isDrunk" in student); // false

// Пример 4 
// Допустим у нас были переменные - и мы бы хотели создать из них объект
const title = "Titanic";
const capacity = 1500;

const titanic = { title, capacity };
console.log(titanic); // { title: 'Titanic', capacity: 1500 }
// Пример 5 
const name1 = "Avrora";
const cap = 300;
// хотел бы создать объект из этих переменных, но с другими названиями ключей
const avrora = { title: name1, capacity: cap };
console.log(avrora); // { title: 'Avrora', capacity: 300 }

// Пример 6 
// Метод внутри объекта 
const dog = {
    nick: "Bobby",
    bark() {
        console.log("woof-woof");
    }
};

dog.bark();

const s = dog.bark;
s();

// ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ (устарело, но используется под капотом)
// это нативное наследование в JS
// - это наследование между двумя объектами
const bicycle = {
    brand: "stels",
    price: 300,
    bell() {
        console.log("Bz-bz-ring-ring");
    }
}
// на основании велосипеда сделаем горный велосипед
// указываем прототип с помощью свойства прото (по два подчеркивания с каждой стороный)
const mountainBike = {
    __proto__: bicycle,
    price: 450,
    gears: 7
}




const vehicle = {
    speed: 40,
    capacity: 4,
    drive() {
        console.log('br-br-br')
    }
}

const jeep = {
    __proto__: vehicle,
    capacity: 5,
    speed: 60,
    numberOfDoors: 2,
    driveCar() {
        console.log(`${this.drive} ${this.speed} km`);
    }
}

jeep.__proto__.drive();
jeep.drive();

const volvo = {
    __proto__: jeep,
    capacity: 5,
    speed: 60,
    numberOfDoors: 2
}

volvo.driveCar();

// Class, inheritance 

class Animal {
    constructor(age, name, color) {
        this.age = age;
        this.name = name;
        this.color = color;
    }
    info() {
        console.log(`Меня зовут ${this.name} Возраст: ${this.age} Цвет: ${this.color}`);
    }
}

const panda = new Animal(14, "Po", "black and white");
console.log(panda);

const salmon = new Animal(2, "Gektor", "silver");
console.log(salmon);

salmon.info();

// наследование
// создадим производный класс птица - 
// добавим поле высота полета heightOfFlight, ration - рацион питания
class Bird extends Animal {
    constructor(age, name, color, heightOfFlight, ration) {
        super(age, name, color);
        this.heightOfFlight = heightOfFlight;
        this.ration = ration;
    }
}



const colibri = new Bird(1, "Sveta", "green", 2, "flowers");
console.log(colibri);
colibri.info();

// Создайте класс Алкоголь Alcohol с полями:
// - title
// - strength
// - volume
// Метод drink - выводит в консоль фразу "Приятно выпить <имя напитка>"

//  Создать производный класс 
// Cognac с полями:
// - age - возраст
// - country - страна производства

// Martini
// - sugarAmount - процент содержания сахара 

// Создайте объекты конъяка и мартини


class Alcohol{

        constructor( title,strength,volueme){
        this.title = title;
        this.strength = strength;
        this.volueme = volueme;
    }

    drink(){
        console.log(`Приятно выпить <${this.title}>`)
    }

};

class Cognac extends Alcohol{
    constructor( title,strength,volueme,age,country){
        super( title,strength,volueme)
        this.age = age;
        this.capacity = country;
    }
  
    
    
}

class Martini extends Alcohol{

    constructor( title,strength,volueme,sugarAmount){
        super( title,strength,volueme)
    }
    
}

const kacheti = new Cognac(); 


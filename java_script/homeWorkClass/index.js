// Задание 1
// Создайте классы: Plant, Rose.
// Роза должна наследовать Растение. Пусть у растения будут поля:

// рост,
// возраст.
// И метод grow, который увеличивает его рост на 10 см.

// У розы должно быть поле - количество бутонов (numberOfFlowers). 
// Создайте объект класса розы, вызовите метод.

class Plant {
    // можно задавать значения по умолчанию через равно
    // если при вызове конструктора не передадут значения
    // или передадут undefined - то будет использовано соответсвующее значение 
    // по умолчанию
    constructor(heigth = 200, age = 1){
      this.heigth = heigth;
      this.age = age;
    }
    grow(){
      this.heigth += 10;
    }
  }
  
  const bamboo = new Plant();
  console.log(bamboo);
  
  class Rose extends Plant{
    constructor(heigth, age, numberOfFlowers){
      super(heigth, age);
      this.numberOfFlowers = numberOfFlowers;
    }
  }
  
  console.log(typeof Plant);    // function
  console.log(typeof ["hey"]);  // object
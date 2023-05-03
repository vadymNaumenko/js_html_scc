
const brothers = [
    {race:"hobbit", height:110, age:45, name:"Frodo Baggins"},
    {race:"human", height:185, age:46, name:"Aragorn"},
    {race:"elf", height:189, age:110, name:"Legolas"},
    {race:"dworf", height:140, age:150, name:"Gimli"},
    {race:"human", height:195, age:150, name:"Gandalf"},
];
// пример 1
const names = brothers.map((element)=>element.name);
console.log(names);
// 1 метод Map - возвращает новый массив, не изменяя исходный
// пример 2
const ages = brothers.map((element)=>element.age);
console.log(ages);
// пример 3
const raceNames = brothers.map((brother)=> brother.race + " " + brother.name);
console.log(raceNames);
// пример 4
const sizes = brothers.map((brother)=>{
    if (brother.height >=170){
        return "Высокий!";
    }
    return "Низкий";
});
console.log(sizes);
const sizesVer2 = brothers.map((brother)=> brother.height >=170 ? "Высокий!" : "Низкий");
console.log(sizesVer2);

// метод ForEach  - нужен для измененния исходного массива

brothers.forEach((brother)=> brother.age );
console.log(brothers);





// метод Reduce
const sum = ages.reduce((acc,current)=> acc + current,0);
console.log(sum);

// iteration -- acc -- current
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200
  // сумммируем и возвращаем значение аккумулятора 551


  let heigts = brothers.reduce((acc,brother) => acc += brother.height);
 // console.log(heigts);

  heigts = brothers.map((b)=>b.height).reduce((acc,current)=>acc+=current);

  console.log(heigts);


  //method split

  let str = "Gendelf, Sauron";

  const namesArr = str.split(', ');
console.log(namesArr);

//method split
const newString = namesArr.join(", ");
console.log();

//method filter
const oldBrothers = brothers.filter((brother)=>brother.age>100).map((b)=>b);
console.log(oldBrothers);

// method find

const person = brothers.find((p)=>p.age === 150);
console.log(person);
console.log("////////////////////////////////")
 const person2 = brothers.find((p)=>p.name.charAt[0] === "R");
console.log(person2);


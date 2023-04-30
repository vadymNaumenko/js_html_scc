const  person ={name:"Frank",age: 37};

console.log(person.age);


const age = person.age;
const name = person.name;

console.log(age);
console.log(name);

console.log('\n //////////////////\n');

const dog = {nick:"Bobby",breed: 'corgi'};
const {nick,breed,height,weight = 2} = dog;

console.log(nick);
console.log(breed);
console.log(height);
console.log(weight);

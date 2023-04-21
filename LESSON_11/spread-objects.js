const fruits = ["lime","banan","orange"];
const newFruits=[...fruits,"apple"];


//spread 
const fruit = {
    title:"orange",
    color:"yellow",
    weight:"200"
}
console.log(fruit);

const specialOrange = {...fruit, contry:"Maroco"};
console.log(specialOrange);
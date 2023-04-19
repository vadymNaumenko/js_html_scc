// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
let clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

console.log(clonedBtn);
clonedBtn.textContent ='Я изменю тебя';
clonedBtn.type = "button";
clonedBtn.backgroundColor = "#a78b71";


let btn2 = null;

let i = 0;

const colors = [
  'red',
  'blue',
  'yellow',
  'violet'

]


btn.addEventListener('click',()=>{
  document.body.append(clonedBtn);
  btn2 = document.getElementById('magic-btn-2');
  btn2.style.backgroundColor = "#a78b71";
  
console.log(btn2);


   btn2.addEventListener('click',()=>{
    // const btn = document.querySelector('#magic-btn');
    //btn.style.backgroundColor = `#9c4a1a`;

    const btn = document.getElementById("magic-btn");
  
    if(i>= colors.length) i=0;
    btn.style.backgroundColor = colors[i++];
    btn.style.color = 'black';
 
  });



});







const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");

// task 1
const flower = document.getElementById("text-flower");
const btnFlower = document.getElementById("btn-flower");

// task 2

let imgPanda = document.getElementById("img-panda");
const btnShowPanda = document.getElementById("btn-panda");


// всегда проверяйте получилось ли отловить(получить) элемент, для этого выведем в консоль
console.log(paragraphElement);
console.log(changeButtonElement);

console.log(flower);
console.log(btnFlower);

console.log(imgPanda);
console.log(btnShowPanda);

// мы можем повесить на кнопку слушатель событий
// когда произойдет событие клика - то есть нажатие на кнопку
// слушатель событи вызовет тот код, который ме ему предоставили

changeButtonElement.addEventListener('click', ()=>{
  // код внутри этого блока выполняется только при клике на кнопочку
  paragraphElement.style.backgroundColor = "lightcoral";
});



btnFlower.addEventListener("click",()=>{
flower.textContent = "Ягодки";
});

btnShowPanda.addEventListener("click",()=>{
 
    // imgPanda.style.backgroundImage = "url('panda.jpg')";
    imgPanda.src = 'panda.jpg';

   
});



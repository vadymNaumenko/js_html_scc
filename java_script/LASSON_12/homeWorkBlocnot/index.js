{/* <div class="notebook">
<div>
    <form action="" class="form">
        <input type="text" name="text"  class="line-txt">
         <button type="submit" class="btn-save">save</button>
    </form>
</div>
<ul class="table" id="table">9</ul>

</div> */}

// const lineTxt = document.getElementById("line-txt");
const btnSave = document.getElementById("btn-save");
const table = document.getElementById("table");
const form = document.getElementById("form");


// console.log(liElement);
console.log(btnSave);
console.log(table);
console.log(form);


const lists = [];

// function changeStatus(event) {
//     if (event.target.style.textDecoration === "line-through") {
//       event.target.style.textDecoration = "none";
//     } else {
//       event.target.style.textDecoration = "line-through";
//     }
//   }
// function addElement(evant){
//     evant.preventDefault();
//     lists.push( person={
//    txt:evant.target.txt.value
//     })
// }
function clearInputs(event) {
    event.target.text.value = "";
}

form.addEventListener('submit', (evant) => {
    evant.preventDefault();
    console.log(event.target.text.value);
    const textTask = evant.target.text.value;
    console.log(textTask);


    const liElement = document.createElement('li');
    liElement.textContent = textTask;
    table.append(liElement);

    console.log(liElement);

    clearInputs(evant);

});



// Объект person добавляется в массив persons.
// const liElement = document.createElement('li'); //  создали <li></li>
// liElement.textContent = `${person.name} ${person.place} `; // <li>Bill Texas</li>
// liElement.onclick = changeStatus;
// устанавливается обработчик клика onclick,
// который вызывает функцию changeStatus для изменения стиля элемента при клике.





function removeElement(id) {
    lists[id] = "";
}

btnSave.addEventListener('click', () => {

});

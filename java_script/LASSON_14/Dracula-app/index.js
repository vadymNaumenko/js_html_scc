
const cardElement = document.getElementById("dracula-card");
console.log(cardElement);
async function loadDracula(){
    const response = await fetch("https://alisherkhamidov.github.io/fake-api/dracula.json");
    const obj = await response.json();
    console.log(obj);

    const {name,age,isHugry,motto,mood}=obj;
    console.log(name,age,isHugry,motto,mood);
    cardElement.textContent = `${name} ${age} ${motto} ${mood} ${isHugry}`;

}
loadDracula();
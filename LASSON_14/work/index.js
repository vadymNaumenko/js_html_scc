const userElement = document.getElementById("user");

async function getUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const obj = await response.json();

    const {userId,id,title,completed} = obj;

    userElement.textContent = `${userId} ${id} ${title} ${completed}`;

}

getUser();
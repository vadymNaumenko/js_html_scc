function addTask(){
    // Получаем значение из текстового поля
    const taskText = document.getElementById("taskInput").value;
    if (taskText.trim() === ""){
        alert("пожалуйста введите текст задачи");
        return;
    }
    //return после вызова alert(),
    // функция завершается с помощью оператора return
    // Предотвращается добавление пустой задачи в наш список
    // Создадим новый элемент списка
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Удалить</button>`;
    // Создали кнопку "Удалить" внутри элемента списка
    // onclick  устанавливает  обработчик события при нажатии на кнопку
    // передавая текуий элемент кнопки в качестве аргумента,
    //когда кнопка будет нажата
    //Добавить новый элемент в список задач
    document.getElementById("taskList").appendChild(taskItem);
    //  Очищаем текстовое поле ввода
    document.getElementById("taskInput").value = "";
}
function removeTask(button){
    const taskItem = button.parentElement;
    taskItem.remove()
}
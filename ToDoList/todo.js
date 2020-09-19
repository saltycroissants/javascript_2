const toDoForm = document.querySelector(".toDoForm-js"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = toDoList.querySelector("toDoList-js");


function loadToDos(){
    const toDos = localStorage.getItem();    
}

function init(){
    loadToDos();
}

init();
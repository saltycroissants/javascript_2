const toDoForm = document.querySelector(".toDoForm-js"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList-js");

const TODO_LS = "toDos";

//로멀에 저장할 todo list
const toDos = [];

function paintTodo(text){
    //console.log(text);
    //html에 li 생성
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

    const toDo_object ={
        text : text ,
        id : toDos.length + 1
    };

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    //enter 눌러서 입력하면 창에서 값이 사라지게
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODO_LS);
    if( toDos !== null){
    }else{
    //to do 가 없을떄 - 처음
    }    
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();


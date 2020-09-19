const toDoForm = document.querySelector(".toDoForm-js"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList-js");

const TODO_LS = "toDos"; //key

//로멀에 저장할 todo list
const toDoArr = [];

function saveTodos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDoArr));
}

function paintTodo(text){
    //console.log(text);
    //html에 li 생성
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDoArr.length + 1;
    delBtn.innerHTML = "❌";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newId;
    const toDo_object ={
        text : text ,
        id : newId
    };

    toDoArr.push(toDo_object);
    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    //enter 눌러서 입력하면 창에서 값이 사라지게
    toDoInput.value = "";
}

function loadToDos(){
    const toDos_loaded = localStorage.getItem(TODO_LS);
    if( toDos_loaded !== null){
    }else{
    //to do 가 없을떄 - 처음
    }    
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();


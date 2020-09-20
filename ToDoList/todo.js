const toDoForm = document.querySelector(".toDoForm-js"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList-js");

const TODO_LS = "toDos"; //key

//로컬에 저장할 todo list
let toDoArr = [];

function deleteToDo(event){
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    //html에서 지우기
    toDoList.removeChild(li);
    
    /* without arrow function
    const cleanToDoArr = toDoArr.filter(function(toDo)
        return toDo.id != li.id;
    });*/

    //using arrow function
    const cleanToDoArr = toDoArr.filter(toDo => toDo.id != li.id);
    console.log(cleanToDoArr);
    toDoArr = cleanToDoArr
    saveTodos();
}

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
    delBtn.addEventListener("click", deleteToDo);

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

//개발할떄 확인하려고
function showToDo(toDo){
    console.log(toDo.text);
}

function loadToDos(){
    const toDos_loaded = localStorage.getItem(TODO_LS);
    if( toDos_loaded !== null){
        //string을 다시 JSON으로 파싱
        const toDos_parsed = JSON.parse(toDos_loaded);
        //console.log(toDos_loaded);
        //console.log(toDos_parsed);
        //toDos_parsed.forEach(showtoDo);

        for (let i=0; i < toDos_parsed.length; i++ ){
            paintTodo(toDos_parsed[i].text)
        }


    }else{
    //to do 가 없을떄 - 처음
    }    
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();


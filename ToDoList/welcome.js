const form = document.querySelector(".form-js");
const input  = form.querySelector("input");
const welcome = document.querySelector(".welcome-js");

const USER_LS = "currentUser",
    SHOWING_CN = "showing"; //화면에 나타나게 하고 싶을때

function saveName(text){
    localStorage.setItem(USER_LS , text);
}
    
function handleSubmit(event){
   event.preventDefault();
   const currentValue = input.value;
   paintWelcome(currentValue);
   saveName(currentValue);

}

function askForName(){
    form.classList.add(SHOWING_CN); //이름이 없으면, 이름 받는 form이 나타나게 하고 싶음
    form.addEventListener("submit" , handleSubmit);
}

function paintWelcome(text){
    form.classList.remove(SHOWING_CN);
    welcome.classList.add(SHOWING_CN);
    //console.log(welcome.classList);
    welcome.innerText = `hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //ask for name
        askForName();
    }else{
        paintWelcome(currentUser);
    }
}

function init(){
    loadName();
};

init();
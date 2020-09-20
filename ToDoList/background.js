const body = document.querySelector("body");

const NUMBER_OF_IMAGES = 3;

function onImageLoad(){
    console.log("image loading");
}

function showImage(imageNum){
    

    const image = new Image(); //html에 image 요소 추가
    image.src = `images/${imageNum + 1}.jpg`;
    //console.log(imageNum);
    body.appendChild(image);
    //image.addEventListener("loadend", onImageLoad);
    image.classList.add("bgImg") //image에 class 추가
    body.prepend(image);
    
    //[다른 방법]
    //body.style.backgroundImage = `url('images/${imageNum + 1}.jpg')`;
  
}

function getRandom(){
    const num = Math.floor(Math.random() * NUMBER_OF_IMAGES);
    return num
}

function init(){
    const ranNum = getRandom();
    showImage(ranNum);
};

init();


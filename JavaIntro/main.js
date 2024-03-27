const mySpan = document.querySelector(".one");
const yourSpan = document.querySelector(".two")
const myList = document.querySelectorAll(".break");
const imageList = document.querySelectorAll("img");
mySpan.textContent = "Why is it so stupid?";
let Var = "Quiet";
let myButton = document.querySelector("button");
let i = 0;
function setError() {
    mySpan.textContent = "WHY?";
    yourSpan.textContent = "AAAAAA";
    while(i < myList.length) {
        myList[i].textContent = "ERROR ERROR";
        i++;
    }
}
imageList[0].onclick = () => {
    const mySrc = imageList[0].getAttribute("src");
    if (mySrc === "Small.png") {
        imageList[0].setAttribute("src", "Peeping Big.png");
    } else {
        imageList[0].setAttribute("src", "Small.png");
    }
}
imageList[4].onclick = () => {
    const mySrc = imageList[4].getAttribute("src");
    if (mySrc === "Small.png") {
        imageList[4].setAttribute("src", "Brachyura.png");
        imageList[4].setAttribute("height", "400");
        imageList[4].setAttribute("width", "500");
    } else {
        imageList[4].setAttribute("src", "Small.png");
        imageList[4].setAttribute("height", "80");
        imageList[4].setAttribute("width", "160");
    }
}
myButton.onclick = () => {
    setError();
    alert("ERROR ERROR ERROR");
}
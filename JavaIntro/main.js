const myHeading = document.querySelector("span");
const myList = document.querySelectorAll(".break");
const imageList = document.querySelector("img");
myHeading.textContent = "Why is it so stupid?";
let Var = "Quiet";
let myButton = document.querySelector("button");
let i = 0;
function setError() {
    myHeading.textContent = "WHY?";
    while(i < myList.length) {
        myList[i].textContent = "ERROR ERROR";
        i++;
    }
}
imageList.onclick = () => {
    const mySrc = imageList.getAttribute("src");
    if (mySrc === "Small.png") {
        imageList.setAttribute("src", "Peeping Big.png");
    } else {
        imageList.setAttribute("src", "Small.png");
    }
}
myButton.onclick = () => {
    setError();
    alert("ERROR ERROR ERROR");
}
const myHeading = document.querySelector("span");
const myList = document.querySelector(".break");
myHeading.textContent = "Why is it so stupid?";
let Var = "Quiet";
let myButton = document.querySelector("button");
function setError() {
    myList.textContent = "ERROR ERROR";
    myHeading.textContent = "WHY?";
}
myButton.onclick = () => {
    setError();
}
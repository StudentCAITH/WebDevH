const myHeading = document.querySelector("span");
const myAlt = document.querySelector("h2");
myHeading.textContent = "Why is it so stupid?";
let Var = "Quiet";
let myButton = document.querySelector("button");
function setError() {
    myAlt.textContent = "ERROR ERROR";
    myHeading.textContent = "WHY?";
}
myButton.onclick = () => {
    setError();
}
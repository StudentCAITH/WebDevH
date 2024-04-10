/*
Use this file to write your JavaScript code.
Delete this comment when you start writing your code.
 */
var x = true;
var y = false;

if (x == true) {
    console.warn("You shouldn't be seeing this. Check your if statement");
} else if (x == "true") {
    console.info("This statement should execute instead of the other one.");
}

if (y == 0) {
    console.info("False and zero are the same in == conditionals.");
}
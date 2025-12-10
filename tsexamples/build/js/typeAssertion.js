"use strict";
// type casting or type assertion
let divElement = document.getElementById("title");
// fetch(api) ==> JSON or 404 | 500 | ERROR
function someTask(a, b, operation) {
    if (operation == 'add') {
        return a + b;
    }
    return "Sum : " + (a + b);
}
let myVal = someTask(4, 5, "contact");

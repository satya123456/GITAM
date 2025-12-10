// type casting or type assertion
//let divElement:HTMLDivElement = document.getElementById("title") as HTMLDivElement
// fetch(api) ==> JSON or 404 | 500 | ERROR
function someTask(a, b, operation) {
    if (operation == 'add') {
        return a + b;
    }
    return "Sum : " + (a + b);
}
var myVal = someTask(4, 5, "contact");
console.log(myVal);

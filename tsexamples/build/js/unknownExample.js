"use strict";
// unknown type forces you to do typechecking before using
function unknownExample(arg) {
    if (typeof arg === 'function') {
        arg();
    }
    else if (typeof arg === 'string') {
        console.log(arg.toUpperCase());
    }
}
unknownExample(console.log); // works
unknownExample("Hello World"); // this fails at runtime

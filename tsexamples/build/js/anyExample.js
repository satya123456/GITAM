"use strict";
function anyfunction(arg) {
    arg();
}
anyfunction(console.log); // works
anyfunction("Hello World"); // this fails at runtime

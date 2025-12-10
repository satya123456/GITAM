function anyfunction(arg: any) {
    arg();
}

anyfunction(console.log); // works
anyfunction("Hello World"); // this fails at runtime
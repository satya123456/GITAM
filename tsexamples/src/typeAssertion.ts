// type casting or type assertion
let divElement:HTMLDivElement = document.getElementById("title") as HTMLDivElement

// fetch(api) ==> JSON or 404 | 500 | ERROR

function someTask(a: number, b:number, operation: 'add' | 'contact') : number | string {
    if(operation == 'add') {
        return a + b;
    } 
    return "Sum : " + (a + b)
}

let myVal:string = someTask(4,5, "contact") as string;


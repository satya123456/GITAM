const data = [27,8,33,11,57,235,147];

let high = data.findLast(x => x > 100);

console.log(high);

let values:number[] = [10,20,3];


function add(a: number, b: number) : number {
    return a + b;
}

add(4,6); 

//   add(54, values[1] ); // add(54,20); 

//  "noUncheckedIndexedAccess": true,               
// forces you to do typechecking before you use array index elements

if(typeof values[1] == 'number') {
    add(values[1], 98);
}
// default param value

function sumAll(a: number = 10, b: number = 2, c: number = 5): number {
    return a + b + c;
}

console.log(sumAll()); // 17
console.log(sumAll(1,2)); // 8
console.log(sumAll(3,7,5)) ; // 15

// rest parameters

// first parameter is a , nums can be zero to n
function total(a:number, ...values: number[]): number {
    return a + values.reduce( (acc, no) => acc + no);
}   

console.log(total(3,1,5,667,11,5));
console.log(total(232, 521, 45));

let data2:number[] = [6,2,21,6,21];
// others spread operator
let [a, ...others] = data2;
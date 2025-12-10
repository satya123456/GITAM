var data = [27, 8, 33, 11, 57, 235, 147];
//let high = data.findLast(x => x > 100);
//console.log(high);
var values = [10, 20, 3];
function adition(a, b) {
    return a + b;
}
console.log(adition(4, 6));
//   add(54, values[1] ); // add(54,20); 
//  "noUncheckedIndexedAccess": true,               
// forces you to do typechecking before you use array index elements
if (typeof values[1] == 'number') {
    adition(values[1], 98);
}
// default param value
function sumAll(a, b, c) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 2; }
    if (c === void 0) { c = 5; }
    return a + b + c;
}
console.log(sumAll()); // 17
console.log(sumAll(1, 2)); // 8
console.log(sumAll(3, 7, 5)); // 15
// rest parameters
// first parameter is a , nums can be zero to n
function total(a) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return a + values.reduce(function (satya, pavan) { return satya + pavan; });
}
console.log(total(3, 1, 5, 667, 11, 5));
console.log(total(232, 521, 45));
var data2 = [6, 2, 21, 6, 21];
// others spread operator
var a = data2[0], others = data2.slice(1);
console.log.apply(console, others);

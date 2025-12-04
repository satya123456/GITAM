 export const PI = 3.14159;
 
 // HOF
 function forEach(items, action) {
    for(let i = 0; i < items.length; i ++) {
        action(items[i]);
    }
}

// HOF, OCP
export default function filter(elems, predicateFn) {
    var results = [];
        forEach(elems, function(elem) {
            if(predicateFn(elem)) {
                results.push(elem);
            }
        })

    return results;
}


// HOF, OCP
export function map(elems, transformFn) {
    var results = [];
        forEach(elems, function(elem) {
                results.push(transformFn(elem));
        });
    return results;
}

// HOF, memoization
export function memo(fn){
    var cache = {};
    return function(arg){
        // this function can access members of outer function -> Closure
        if(!cache[arg]) {
            cache[arg] = fn(arg);
        }
        return cache[arg];
    }
}


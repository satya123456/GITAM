 // HOF
  type ProductType = {
    "id": number,
    "name": string,
    "price": number,
    "category": string
  }

  let numbers:number[] = [5,7,10,4,77,24];
  
  let products:ProductType[] = [
            {
                "id": 1, "name": "iPhone 16", "price": 89000.00, "category": "mobile"
            },
            {
                "id": 2, "name": "Sony Bravia", "price": 271000.00, "category": "tv"
            },
            {
                "id": 3, "name": "Samsung Fold", "price": 145000.00, "category": "mobile"
            },
            {
                "id": 3, "name": "Logitech Mouse", "price": 540.00, "category": "computer"
            },
            {
                "id": 4, "name": "Onida ", "price": 3000.00, "category": "tv"
            }
         ];

 // items can be products, string, numbers, employees, ...
//  function forEach(items:any, action:Function) {
// <T> T is a generic type <genericType>

 function forEach<T>(items:T[], action:Function) {
    for(let i:number = 0; i < items.length; i ++) {
        action(items[i]);
    }
}

forEach(numbers, console.log);
forEach(products, console.log);

// HOF, OCP
function filter<T>(elems:T[], predicateFn:(elem:T) => boolean): T[] {
    var results:T[] = [];
        forEach(elems, function(elem:T) {
            if(predicateFn(elem)) {
                results.push(elem);
            }
        })
    return results;
}

  let evens = filter(numbers, function(no) {
            return no % 2 === 0;
         });

         forEach(evens, console.log); 

         let mobiles = filter(products, function(p) {
            return p.category === 'mobile';
         });

         forEach(mobiles, console.log);
         
function add(a: number, b: number) {
    return a + b;
}
         
// HOF, OCP
function map<T, R>(elems:T[], transformFn: (elem:T) => R): R[] {
    var results:R[] = [];
        forEach(elems, function(elem: T) {
                results.push(transformFn(elem));
        });
    return results;
}

 function toCard(product:ProductType) {
        return `
            <div className='card'>
                <div className='card-header'>
                    ${product.name}
                </div>
                <div className='card-body'>
                    ${product.price}
                </div>
            </div>
        `
    } 

    let cards = map(products, toCard);
    forEach(cards, console.log);

// HOF, memoization
// function memo(fn){
//     var cache = {};
//     return function(arg){
//         // this function can access members of outer function -> Closure
//         if(!cache[arg]) {
//             cache[arg] = fn(arg);
//         }
//         return cache[arg];
//     }
// }


import Product from "./Product"; // ESM
import filter, {map, memo} from "./lib";

import './styles.css'

let add = (x, y) => x + y;

console.log(add(4,5));

console.log(add(556,111));

let product = new Product("Wacom", 4500.00);
console.log(product.getTitle(), product.getPrice());

let numbers = [5, 7, 10, 4, 77, 24];
let products = [
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

let evens = filter(numbers, function (no) {
    return no % 2 === 0;
});

evens.forEach(data => console.log(data));

let mobiles = filter(products, function (p) {
    return p.category === 'mobile';
});

mobiles.forEach(product => console.log(product));


let  React = {
    createElement: (tag, props, ...children) => {
         var element = {tag, props: {...props, children}};
         return element;
    }
}



let ProductCard = <div>
    <div>{product.getTitle()}</div>
    <div>{product.getPrice()}</div>
</div>

console.log(ProductCard);
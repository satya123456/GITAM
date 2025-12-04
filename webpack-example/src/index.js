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


function render(element, container) {
    if(['string','number'].includes(typeof element)) {
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    let domElement = document.createElement(element.tag);
    if(element.props.children) {
        element.props.children.forEach(child => render(child, domElement))
    }
    container.appendChild(domElement);
}


let  React = {
    createElement: (tag, props, ...children) => {
         var element = {tag, props: {...props, children}};
         return element;
    }
}


// JSX
let ProductCard = <div>
    <h1>{product.getTitle()}</h1>
    <p>{product.getPrice()}</p>
</div>

console.log(ProductCard);

render(ProductCard, document.getElementById("root"));
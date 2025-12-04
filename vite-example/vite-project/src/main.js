import './style.css'
import filter, {map, memo} from "./lib";

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




document.querySelector('#app').innerHTML = `
  <div>
    Hell Vite!!!
  </div>
`



import type Product from "./Product";

export default interface CartItem extends Product {
    quantity: number, // how many items purchased
    amount : number // price * quantity + tax - discount
}
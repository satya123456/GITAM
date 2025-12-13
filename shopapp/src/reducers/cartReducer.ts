import type CartItem from "../model/CartItem"
import type Product from "../model/Product"

type ActionType = {
    type: 'ADD_TO_CART',
    payload: Product
} |
{
    type: 'INCREMENT',
    payload: number
} | {
    type: 'DECREMENT',
    payload: number
} | {
    type: 'CLEAR_CART'
}

type CartState = {
    items: CartItem[],
    total: number,
    qty: number
}

//logic, not specific to React, can be used in Server side ExpressJS, Angular, or any other type of JS libraries
export default function cartReducer(state: CartState, action: ActionType) {
    switch(action.type) {
        case 'ADD_TO_CART':
            // ...action.payload will be product sent from ProductCard Component
            let item:CartItem = 
                {   ...action.payload, 
                    quantity: 1, 
                    amount: action.payload.price + 0.1 * action.payload.price 
               }; 
            return {
                items: [...state.items, item],
                qty: state.qty + 1,
                total: state.total + item.amount
            }
        case 'INCREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                items: [],
                qty: 0,
                total: 0
            }
        default : return state;
    }
}
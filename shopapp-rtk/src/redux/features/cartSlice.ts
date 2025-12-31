import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type CartItem from "../../model/CartItem";
import type Product from "../../model/Product";

type CartState = {
    items: CartItem[],
    quantity: number,
    total: number
}
const initialState:CartState = {
    items: [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<Product>) => {
            // to avoid duplicate
            // check if action.payload is already there in state.items
            // if present increment the qty or ignore
            let existing = state.items.find(product => product.id === action.payload.id);
            if(existing) {

            } else {
            // RTK will pass a clone of state and not the original state
            // Any Changes to Clone, RTK will sync it with original
            state.items.push({...action.payload, quantity: 1, amount: action.payload.price});
            state.quantity++;
            state.total += action.payload.price
            }
        },
        increment: (state, action: PayloadAction<number>) => {
           let item =  state.items.find(item => item.id === action.payload);
           if(item && item.quantity) {
            item.quantity++;
            item.amount = item.quantity * item.price;
           }
           state.total = state.items.map(item => item.amount).reduce((v1, v2) => v1+ v2);
        },
        checkout: (state) => {
            state.items = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

// addtoCart called from ProductCard
// increment called from CartRow
// checkout will be called from CartList
export const {addToCart, increment, checkout} = cartSlice.actions
export default cartSlice.reducer;

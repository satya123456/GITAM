import { createContext, useReducer } from "react";
import type CartItem from "../model/CartItem";
import type Product from "../model/Product";
import cartReducer from "../reducers/cartReducer";

// context can have variables and functions also
type CartContextType = {
    items: CartItem[],
    total: number,
    qty: number,
    addToCart: (product:Product) => void // declare
}
export const CartContext = createContext<CartContextType>({
    items: [],
    total: 0,
    qty: 0,
    addToCart: (product: Product) => {} // initialize
});

let initialState = {
    items: [],
    total: 0,
    qty: 0
};

type Props = {
    children : React.ReactNode
}

export default function CartContextProvider({children}: Props) {

    let [state, dispatch] = useReducer(cartReducer, initialState);

    // actual addToCart definition
    function addToCart(product:Product) {
        dispatch({type:'ADD_TO_CART', payload: product});
    }

    // function increment(id:number) {
    //     dispatch({type:'INCREMENT', payload: id})
    // }

    return <CartContext.Provider value={{items: state.items, 
                                        total: state.total, 
                                        qty: state.qty, addToCart}}>
        {children}
    </CartContext.Provider>
}


// export const CartContext = createContext();
// export default function CartContextProvider({children}) {

//         let [state, dispatch] = useReducer(cartReducer, initialState);

//     // actual addToCart definition
//     function addToCart(product) {
//         dispatch({type:'ADD_TO_CART', payload: product});
//     }

//     return <CartContext.Provider value={{items: state.items, 
//                                         total: state.total, 
//                                         qty: state.qty, addToCart}}>
//         {children}
//     </CartContext.Provider>
// }
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice';
import profileReducer from './features/profileSlice';

// instead of createStore
// by default REDUX_DEVTOOLS_EXTENSION is enabled
const store = configureStore({
    reducer: {
        cart: cartReducer,
        profile: profileReducer
    },
    // devTools: false
});


export default store;
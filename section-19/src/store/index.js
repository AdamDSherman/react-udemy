import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-slice';
import cartSlice from "./cart-slice";

// Configute store takes an object where you set up your root reducer
// Contains references to other reducers
const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
});

export default store;

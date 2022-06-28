import { createSlice } from "@reduxjs/toolkit";


// Reducers here carry a state AND and action.
// Action will carry some data in the 'payload'.
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemToCart(state, action) {
            // Get item we added/
            const newItem = action.payload;
            // Check if newItem already exists in state's items array.
            const exsistingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!exsistingItem) {
                // Push new obj to arr
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else {
                exsistingItem.quantity++;
                exsistingItem.totalPrice = exsistingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            state.totalQuantity--;
            const id = action.payload;
            // Check if given ID is already in state array.
            const exsistingItem = state.items.find(item => item.id === id);
            // If quantity is one reomve item from array altogether
            if (exsistingItem.quantity === 1) {
                // Use filter() to return new array where item.id is filtered out of it.
                state.items = state.items.filter(item => item.id !== id);
            }
            // If multiple items remove just 1 from quantity.
            else {
                exsistingItem.quantity--;
                exsistingItem.totalPrice = exsistingItem.totalPrice - exsistingItem.price;
            }
        },
    }
});

export const cartActions =  cartSlice.actions;

export default cartSlice;
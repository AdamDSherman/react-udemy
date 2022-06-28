import { createSlice } from '@reduxjs/toolkit';


// Createslice takes a config object
// Unique name
// initual siate
// Array of reducer methods/actions
const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            console.log("toggle reducer");
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

// Export actions and actions
export const uiActions = uiSlice.actions;

export default uiSlice;

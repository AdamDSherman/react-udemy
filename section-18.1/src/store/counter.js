import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// createSlice is like a reducer.
// We are preparing a 'slice' of our global state.
// Every slice needs a name
// Takes state (initialState)
// Can take an action
// Takes reducer functions as methods. They take state as argument
// Can mutate state in createSlice methods (redux toolkit clones the real state)
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// Multiple slices go in the 1 store
// Configure store wants a configuration object
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer } 
});

export default store;





















// -------------------------------------------------------------------------------------------------------
// Reducer function
// const counterReducer = (state = initialState, action) => {

//     // Different actions return different state shapshots
//     // Note even though we're not doing anything with showCounter we still need to set it as the functions returnt he entire state.
//     // Never change the existing state, just return a new copy of the state in an object.
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }

//     return state;

// }

//// Store
//const store = createStore(counterReducer);

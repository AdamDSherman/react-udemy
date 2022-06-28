const redux = require('redux');

// Reducer function
// Takes given inputs (state and an action), produces/returns new state object
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};

// Create a store
const store = redux.createStore(counterReducer);

// Triggered when state changes
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

// Dispatch actions
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

import { useState, useReducer } from "react";

    const initialInputState = {
        value: '',
        isTouched: false
    }

    // Set states with use reducer
    // Takes 2 arguments - previous state snapshot and action we despactch
    const inputStateReducer = (state, action) => {

        if (action.type === 'INPUT') {
            return { value: action.value, isTouched: state.isTouched };
        }
        if (action.type === 'BLUR') {
            return { isTouched: true, value: state.value }
        }
        if (action.type === 'RESET') {
            return { isTouched: false, value: '' }
        }

        // Return our new state snapshot
        return initialInputState;
    };

const useInput2 = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)


    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);
    // const valueIsValid = validateValue(enteredValue);
    // const hasError = !valueIsValid && isTouched;

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    //Set handlers
    const valueChangeHandler = (event) => {
        //Send info to reducer function
        dispatch({type: 'INPUT', value: event.target.value});
        //setEnteredValue(event.target.value);
    }
    const inputTouchedHandler = (event) => {
        dispatch({type: 'BLUR'});
        //setIsTouched(true);
    }
    // Set reset function
    const reset = () => {
        dispatch({type: 'RESET'});
        // setEnteredValue('');
        // setIsTouched(false);
    };
    
    // Data and functions to return
    return {
        //value: enteredValue,
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputTouchedHandler,
        reset
    };
}

export default useInput2;

import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@') }
  }
  return {value: '', isValid: false }
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_PW_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_PW_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6 }
  }
  return {value: '', isValid: false }
};

const Login = (props) => {
  // Replaced with useReducer
  // Use state is the MAIN state management tool
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // Reducer - use instead of state for more complex state updates (eg objs as states). Can be over kill.
  // const [stateSnapshot, dispatchFunctionForNewActionSentToReudcerFunc] = useReducer(reducerFunctionReturnsNewState, {value: 'initial state', initialFunction to set initial state} );
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null} );
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null} );

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(()=> {
    console.log("effect running");

    return () => {
      console.log("effect clean up");
    }
  }, []);

  // Run the function when setFormIsValue, emailState or passwordState
  // are run or changed.

  //Obj destructuring
  // To turn off extra checking once fields are valid.
  const { isValid: emailIsValid } = emailState;
  const {isValid: passwordIsValid } = passwordState;

  useEffect(() => {

    const idenfifier = setTimeout(() => {
      console.log('checking');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);
    
    // Clean up function. Runs before every new useEffect function.
    // Clears the timer.
    return () => {
      console.log("clean up ");
      clearTimeout(idenfifier);
    };
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_PW_INPUT', val: event.target.value});
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_PW_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    }
    // Focus first invalid input
    else if (!emailIsValid) {
      emailInputRef.current.focus();
    }
    else  {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

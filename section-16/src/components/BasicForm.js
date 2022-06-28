import useInput2 from '../hooks/use-input2';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  // Call cust hook
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputTouchedHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput2(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputTouchedHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput2(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputTouchedHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput2(isEmail);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredNameIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid && !enteredLastNameIsValid) {
      return;
    }

    console.log("form sent");

    // Reset field and touch state on submit
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='fisrName'>First Name</label>
          <input 
            type='text'
            id='firstName'
            onChange={nameChangedHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && <p className="error-text">First name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={lastNameChangedHandler}
            value={enteredLastName}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && <p className="error-text">Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          onChange={emailChangedHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Email is incorrect</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

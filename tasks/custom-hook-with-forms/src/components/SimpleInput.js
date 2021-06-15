import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {
    value:enteredName,
    valueChangeHandler:nameInputChangeHandler,
    isTouchedHandler:nameInputBlurHandler,
    invalidInput:enteredNameInputIsInValid,
    validValue:enteredNameValueIsValid,
    submit:onNameSubmit,
    reset:nameReset
  }
  =useInput((value)=>value.trim()!=='')

  const {
    value:enteredEmail,
    valueChangeHandler:emailInputChangeHandler,
    isTouchedHandler:emailInputBlurHandler,
    invalidInput:enteredEmailInputIsInValid,
    validValue:enteredEmailValueIsValid,
    submit:onEmailSubmit,
    reset:emailReset
  }
  =useInput((value)=>value.includes('@') && value.trim()!=='')

  let formIsValid = false;

  if (enteredNameValueIsValid && enteredEmailValueIsValid) {
    formIsValid = true;
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    onNameSubmit();
    onEmailSubmit();
    if (!enteredNameValueIsValid || !enteredEmailValueIsValid) {
      return;
    }


    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    nameReset();
    emailReset();
  };
  const nameInputClasses = enteredNameInputIsInValid
    ? 'form-control invalid'
    : 'form-control';
    const emailInputClasses = enteredEmailInputIsInValid
    ? 'form-control invalid'
    : 'form-control';  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {enteredNameInputIsInValid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailInputIsInValid && (
          <p className='error-text'>Email must contain @.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

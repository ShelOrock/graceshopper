import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import signupValidation from '../../formValidations/signupValidation';

import SignupTemplate from '../Templates/Signup';
import SignupForm from '../Organisms/SignupForm';

import { authenticationThunks } from '../../redux/thunks';

export default () => {

  const dispatch = useDispatch();

  const signupInputs = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { 
    formValues,
    formErrors,
    handleOnChange,
    containsErrors
  } = useForm(signupInputs, signupValidation);

  return (
    <SignupTemplate
      signup={
        <SignupForm
          dispatch={ dispatch }
          formValues={ formValues }
          formErrors={ formErrors }
          containsErrors={ containsErrors }
          handleOnChange={ handleOnChange }
          attemptUserSignup={ () => authenticationThunks.attemptUserSignup(form) }
        />
      }
    />
  )
};

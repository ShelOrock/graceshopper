import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import signupValidation from '../../formValidations/signupValidation';

import { SignupTemplate } from '../Templates';
import { SignupForm } from '../Organisms';

import { authenticationThunks } from '../../redux/thunks';

const SignupPage = () => {

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
          formValues={ formValues }
          formErrors={ formErrors }
          containsErrors={ containsErrors }
          handleOnChange={ handleOnChange }
          attemptUserSignup={ () => dispatch(authenticationThunks.attemptUserSignup(formValues)) }
        />
      }
    />
  )
};

export default SignupPage;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';

import { LoginTemplate } from '../Templates';
import { LoginForm } from '../Organisms';

import { authenticationThunks } from '../../redux/thunks';

const LoginPage = () => {
  
  const dispatch = useDispatch();

  const loginInputs = {
    email: '',
    password: ''
  };

  const {
    formValues,
    handleOnChange,
  } = useForm(loginInputs);
  
  return (
    <LoginTemplate
      login={
        <LoginForm
          dispatch={ dispatch }
          formValues={ formValues }
          handleOnChange={ handleOnChange }
          attemptUserLogin={ () => authenticationThunks.attemptUserLogin(formValues) }
        /> }
    />
  )
};

export default LoginPage;

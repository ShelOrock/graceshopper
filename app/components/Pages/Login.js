import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';

import LoginTemplate from '../Templates/Login';
import LoginForm from '../Organisms/LoginForm';

import { authenticationThunks } from '../../redux/thunks';

export default () => {
  
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

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import LoginTemplate from '../Templates/Login';
import LoginForm from '../Organisms/LoginForm';

import { authenticationThunks } from '../../redux/thunks';

export default () => {
  
  const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: ''
  };
  
  const [ form, setForm ] = useState(initialState);

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <LoginTemplate
      login={ <LoginForm
        dispatch={ dispatch }
        form={ form }
        handleOnChange={ handleOnChange }
        attemptUserLogin={ () => authenticationThunks.attemptUserLogin(form) }
      /> }
    />
  )
};

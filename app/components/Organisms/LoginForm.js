import React, { useState } from 'react';

import { FormContainers } from '../Containers';
import {
  TypeAtoms,
  NavigationAtoms,
  ButtonAtoms } from '../Atoms';
import InputModule from '../Molecules/InputModule';

import { authenticationThunks } from '../../redux/thunks';

const LoginForm = () => {

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
    <FormContainers.Main>
      <FormContainers.Header>
        <TypeAtoms.Title>Login</TypeAtoms.Title>
      </FormContainers.Header>
      <FormContainers.Body>
        <InputModule
          type={ 'text' }
          name={ 'email' }
          value={ form.email }
          onChange={ handleOnChange }
        />
        <InputModule
          type={ 'password' }
          name={ 'password' }
          value={ form.password }
          onChange={ handleOnChange }
        />
        <FormContainers.Actions>
          <ButtonAtoms.DispatchButton
            onClick={ () => authenticationThunks.attemptUserLogin(form) }
            variant='secondary'
          >Login</ButtonAtoms.DispatchButton>
          <TypeAtoms.Body>Don't have an account? <NavigationAtoms.TextLink linkLocation={ '/signup' }>Signup</NavigationAtoms.TextLink></TypeAtoms.Body>
        </FormContainers.Actions>
      </FormContainers.Body>
    </FormContainers.Main>
  );
};

export default LoginForm;

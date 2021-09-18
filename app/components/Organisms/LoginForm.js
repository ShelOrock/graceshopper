import React from 'react';

import { FormContainers } from '../Containers';
import {
  TypeAtoms,
  NavigationAtoms,
  ButtonAtoms } from '../Atoms';
import InputModule from '../Molecules/InputModule';

const LoginForm = ({
  form,
  handleOnChange,
  dispatch,
  attemptUserLogin
}) => (
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
        <ButtonAtoms.Button
          onClick={ attemptUserLogin }
          dispatch={ dispatch }
          variant='secondary'
        >Login</ButtonAtoms.Button>
        <TypeAtoms.Body>Don't have an account? <NavigationAtoms.TextLink to={ '/signup' }>Signup</NavigationAtoms.TextLink></TypeAtoms.Body>
      </FormContainers.Actions>
    </FormContainers.Body>
  </FormContainers.Main>
);

export default LoginForm;

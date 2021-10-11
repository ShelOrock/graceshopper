import React from 'react';

import { InputModule } from '../Molecules';
import {
  TypeAtoms,
  NavigationAtoms,
  ButtonAtoms } from '../Atoms';
import { FormContainers } from '../Containers';

const LoginForm = ({
  formValues,
  handleOnChange,
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
        value={ formValues.email }
        onChange={ handleOnChange }
      />
      <InputModule
        type={ 'password' }
        name={ 'password' }
        value={ formValues.password }
        onChange={ handleOnChange }
      />
      <FormContainers.Actions>
        <ButtonAtoms.Button
          onClick={ attemptUserLogin }
          variant='secondary'
        >Login</ButtonAtoms.Button>
        <TypeAtoms.Body>Don't have an account? <NavigationAtoms.TextLink to={ '/signup' }>Signup</NavigationAtoms.TextLink></TypeAtoms.Body>
      </FormContainers.Actions>
    </FormContainers.Body>
  </FormContainers.Main>
);

export default LoginForm;

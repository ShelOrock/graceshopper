import React from 'react';

import { FormContainers } from '../Containers';
import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';
import InputModule from '../Molecules/InputModule';

export default ({
  dispatch,
  form,
  // validateField,
  errors,
  checkErrors = false,
  handleOnChange,
  attemptUserSignup
}) => (
  <FormContainers.Main>
    <FormContainers.Header>
      <TypeAtoms.Title>Signup</TypeAtoms.Title>
    </FormContainers.Header>
    <FormContainers.Body>
      <InputModule
        type={ 'text' }
        name={ 'email' }
        value={ form.email }
        onChange={ handleOnChange }
        // validateField={ validateField }
        error={ errors.email }
      />
      <InputModule
        type={ 'password' }
        name={ 'password' }
        value={ form.password }
        onChange={ handleOnChange }
        // validateField={ validateField }
        error={ errors.password }
      />
      <InputModule
        type={ 'password' }
        name={ 'confirmPassword' }
        value={ form.confirmPassword }
        onChange={ handleOnChange }
        // validateField={ validateField }
        error={ errors.confirmPassword }
      />
      <FormContainers.Actions>
        <ButtonAtoms.Button
          onClick={ attemptUserSignup }
          dispatch={ dispatch }
          disabled={ checkErrors }
          variant='secondary'
        >Signup</ButtonAtoms.Button>
        <TypeAtoms.Body>Already have an account? <NavigationAtoms.TextLink to={ '/login' }>Login</NavigationAtoms.TextLink></TypeAtoms.Body>
      </FormContainers.Actions>
    </FormContainers.Body>
  </FormContainers.Main>
);

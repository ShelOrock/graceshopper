import React from 'react';

import { FormContainers } from '../Containers';
import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';
import InputModule from '../Molecules/InputModule';

const SignupForm = ({
  dispatch,
  formValues,
  formErrors,
  containsErrors = false,
  handleOnChange,
  attemptUserSignup
}) => { console.log(containsErrors); return (
  <FormContainers.Main>
    <FormContainers.Header>
      <TypeAtoms.Title>Signup</TypeAtoms.Title>
    </FormContainers.Header>
    <FormContainers.Body>
      <InputModule
        type={ 'text' }
        name={ 'email' }
        value={ formValues.email }
        onChange={ handleOnChange }
        error={ formErrors.email }
      />
      <InputModule
        type={ 'password' }
        name={ 'password' }
        value={ formValues.password }
        onChange={ handleOnChange }
        error={ formErrors.password }
      />
      <InputModule
        type={ 'password' }
        name={ 'confirmPassword' }
        value={ formValues.confirmPassword }
        onChange={ handleOnChange }
        error={ formErrors.confirmPassword }
      />
      <FormContainers.Actions>
        <ButtonAtoms.Button
          onClick={ attemptUserSignup }
          dispatch={ dispatch }
          disabled={ containsErrors }
          variant='secondary'
        >Signup</ButtonAtoms.Button>
        <TypeAtoms.Body>Already have an account? <NavigationAtoms.TextLink to={ '/login' }>Login</NavigationAtoms.TextLink></TypeAtoms.Body>
      </FormContainers.Actions>
    </FormContainers.Body>
  </FormContainers.Main>
)};

export default SignupForm;

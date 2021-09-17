import React, { useState } from 'react';

import { FormContainers } from '../Containers';
import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';
import InputModule from '../Molecules/InputModule';

import { authenticationThunks } from '../../redux/thunks';

export default () => {

  const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      email: 'Required',
      password: 'Required',
      confirmPassword: 'Required'
    }
  };

  const [ form, setForm ] = useState(initialState);

  const validateField = (name, value) => {
    switch(name) {
      case 'email':
        if (!value) {
          setForm({
          ...form,
          errors: {
            ...form.errors,
            email: 'Required'
          }
        });

        } else if(!value.match(/\S+@\S+\.\S+/)) {
          setForm({
            ...form,
            errors: {
              ...form.errors,
              email: 'Email not valid'
            }
          });

        } else {
          setForm({
            ...form,
            errors: {
              ...form.errors,
              [name]: ''
            }
          });
        };
      break;

      case 'password':
        if(!value) {
          setForm({
          ...form,
            errors: {
              ...form.errors,
              password: 'Required'
            }
          });

        } else {
          setForm({
            ...form,
            errors: {
              ...form.errors,
              password: ''
            }
          });
        };
      break;

      case 'confirmPassword':
        if(!value) {
          setForm({
          ...form,
          errors: {
            ...form.errors,
            confirmPassword: 'Required'
          }
        });

        } else if(form.confirmPassword !== form.password) {
          setForm({
            ...form,
            errors: {
              ...form.errors,
              confirmPassword: 'Passwords much match'
            }
          });

        } else {
          setForm({
            ...form,
            errors: {
              ...form.errors,
              confirmPassword: ''
            }
          });
        };
      break;

      default:
        return;
    };
  };

  const checkErrors = () => {
    let containsErrors = false;
    Object.values(form.errors).forEach(value => {
      if(!value) {
        containsErrors = false;
      } else {
        containsErrors = true;
      };
    });
    return containsErrors;
  }

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
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
          validateField={ validateField }
          error={ form.errors.email }
        />
        <InputModule
          type={ 'password' }
          name={ 'password' }
          value={ form.password }
          onChange={ handleOnChange }
          validateField={ validateField }
          error={ form.errors.password }
        />
        <InputModule
          type={ 'password' }
          name={ 'confirmPassword' }
          value={ form.confirmPassword }
          onChange={ handleOnChange }
          validateField={ validateField }
          error={ form.errors.confirmPassword }
        />
        <FormContainers.Actions>
          <ButtonAtoms.DispatchButton
            onClick={ () => authenticationThunks.attemptUserSignup(form) }
            disabled={ checkErrors() }
            variant='secondary'
          >Signup</ButtonAtoms.DispatchButton>
          <TypeAtoms.Body>Already have an account? <NavigationAtoms.TextLink to={ '/login' }>Login</NavigationAtoms.TextLink></TypeAtoms.Body>
        </FormContainers.Actions>
      </FormContainers.Body>
    </FormContainers.Main>
  );
};

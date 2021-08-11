import * as React from 'react';
const { useState } = React;

import FormContainer from '../Containers/Form/Form';
import InputModule from '../Molecules/InputModule';
import ButtonsContainer from '../Containers/Form/Buttons';
import Title from '../Atoms/Title';
import DispatchButton from '../Atoms/DispatchButton';
import LinkContainer from '../Containers/Link';
import TextLink from '../Atoms/TextLink';

import * as reduxThunks from '../../redux/thunks';
const { authenticationThunks: { attemptUserSignup } } = reduxThunks;

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
    <FormContainer>
      <Title>Signup</Title>
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
      <ButtonsContainer>
        <DispatchButton
          onClick={ () => attemptUserSignup(form) }
          disabled={ checkErrors() }
          variant='secondary'
        >Signup</DispatchButton>
        <LinkContainer>Already have an account? <TextLink linkLocation={ '/login' }>Login</TextLink></LinkContainer>
      </ButtonsContainer>
    </FormContainer>
  );
};

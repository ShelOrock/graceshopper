import * as React from 'react';
const { useState } = React;

import FormContainer from './FormContainer.jsx';
import FormInputModules from '../../FormInputModules/index.jsx';
import SignupPageButtonsContainer from './SignupPageButtons/index.jsx';
import SignupButton from './SignupPageButtons/SignupButton.jsx';
import LoginLinkButton from './SignupPageButtons/LoginLinkButton.jsx';

export default () => {

  const formInitialState = {
    email: '',
    password: '',
    ['confirm password']: '',
    errors: {
      email: '',
      password: '',
      ['confirm password']: '',
    }
  };

  const [ formState, setFormState ] = useState(formInitialState);

  const validateField = (name, value) => {
    switch(name) {

      case 'email':
        if (!value) {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [name]: 'Required'
            }
          });
  
        } else if(!value.match(/\S+@\S+\.\S+/)) {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [name]: 'Email not valid'
            }
          });

        } else {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [name]: ''
            }
          });
        };

      break;

      case 'password':
        if(!value) {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [name]: 'Required'
            }
          });

        } else {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [name]: ''
            }
          });
        };
        break;

      case 'confirm password':
    
        if(!value) {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [name]: 'Required'
            }
          });

        } else if(formState[name] !== formState.password) {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [name]: 'Passwords much match'
            }
          });
  
        } else {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [name]: ''
            }
          });
        };

        break;

      default:
        return;
    };
  };

  const handleOnChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const moduleProps = {
    formState,
    onChange: handleOnChange,
    validateField
  };

  return (
    <FormContainer>
      <FormInputModules { ...moduleProps } />
      <SignupPageButtonsContainer>
        <SignupButton { ...formState} />
        <LoginLinkButton />
      </SignupPageButtonsContainer>
    </FormContainer>
  );
};
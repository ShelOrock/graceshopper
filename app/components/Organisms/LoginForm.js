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
const { authenticationThunks: { attemptUserLogin } } = reduxThunks;

export default () => {

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
    <FormContainer>
      <Title>Login</Title>
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
      <ButtonsContainer>
        <DispatchButton
          onClick={ () => attemptUserLogin(form) }
          variant='secondary'
        >Login</DispatchButton>
        <LinkContainer>Don't have an account? <TextLink linkLocation={ '/signup' }>Signup</TextLink></LinkContainer>
      </ButtonsContainer>
    </FormContainer>
  );
};

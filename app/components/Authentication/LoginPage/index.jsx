import * as React from 'react';
const { useState, useEffect } = React;
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import FormContainer from './FormContainer.jsx';
import FormInputModules from '../../FormInputModules/index.jsx';
import LoginPageButtonsContainer from './LoginPageButtons/index.jsx';
import LoginButton from './LoginPageButtons/LoginButton';
import SignupLinkButton from './LoginPageButtons/SignupLinkButton.jsx';

export default () => {

  const location = useLocation();

  const { activeUser } = useSelector(state => state);

  useEffect(() => {
    if(activeUser.isLoggedIn) {
      location.pathname = '/';
    }
  }, [activeUser])

  const formInitialState = {
    email: '',
    password: ''
  }

  const [ formState, setFormState ] = useState(formInitialState);

  const handleOnChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const moduleProps = {
    formState,
    onChange: handleOnChange
  };

  return (
    <FormContainer>
      <FormInputModules { ...moduleProps } />
      <LoginPageButtonsContainer>
        <LoginButton { ...formState } />
        <SignupLinkButton />
      </LoginPageButtonsContainer>
    </FormContainer>
  );
};

import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledButton: { Button } } = StyledComponents;

import * as reduxThunks from '../../../../redux/thunks.jsx';
const { authenticationThunks: { attemptUserLogin } } = reduxThunks;

export default (formState) => {

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(attemptUserLogin(formState));
  };

  const buttonProps = {
    onClick: handleOnClick
  }

  return <Button { ...buttonProps }>Login</Button>
};

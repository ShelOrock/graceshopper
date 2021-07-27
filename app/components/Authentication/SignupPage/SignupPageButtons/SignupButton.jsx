import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledButton: { Button } } = StyledComponents;

import * as reduxThunks from '../../../../redux/thunks.jsx';
const { authenticationThunks: { attemptUserSignup } } = reduxThunks;

export default ({ formState }) => {

  const dispatch = useDispatch();

  const checkErrors = () => {
    let containsErrors = false;
    Object.values(formState.errors).forEach(value => {
      if(!value) {
        containsErrors = false;
      } else {
        containsErrors = true;
      };
    });

    return containsErrors;
  };

  const handleOnClick = () => {
    dispatch(attemptUserSignup(formState));
  };

  const buttonProps = {
    disabled: checkErrors(),
    onClick: handleOnClick,
  };

  return <Button { ...buttonProps }>Signup</Button>
};

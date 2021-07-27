import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const {
  StyledButton: { Button },
  StyledForm: { FormButtonContainer },
} = StyledComponents;

import * as reduxThunks from '../../../redux/thunks.jsx';
// const { orderThunks: { createOrder } } = reduxThunks;

export default (formState) => {

  const dispatch = useDispatch();

  const checkErrors = () => {
    let invalidField = false;
    Object.values(formState).forEach(value => {
      if(!value) {
        invalidField = true;
      };
    });
    
    Object.values(formState.errors).forEach(value => {
      if(value) {
        invalidField = true;
      };
    });

    return invalidField;
  };

  const handleOnClick = () => {
    dispatch()
  };

  const buttonProps = {
    disabled: checkErrors(),
    onClick: handleOnClick,
  }

  return (
    <FormButtonContainer>
      <Button { ...buttonProps }>Save</Button>
    </FormButtonContainer>
  );
};

import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledForm: { NumberInput } } = StyledComponents;

export default (cartItem) => {

  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch();
  };

  const inputProps = {
    type: 'number',
    min: '1',
    value: cartItem.productQuantity,
    onChange: handleOnChange
  }
  
  return <NumberInput { ...inputProps }/>
}
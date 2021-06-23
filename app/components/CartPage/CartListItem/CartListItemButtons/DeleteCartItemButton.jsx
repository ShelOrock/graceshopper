import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import { removeItemFromCart } from '../../../../redux/thunks/CartThunks.js';

export default (cartItem) => {

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(removeItemFromCart(cartItem.productId))
  };

  return <Button onClick={ handleOnClick }>Remove from cart</Button>;
};

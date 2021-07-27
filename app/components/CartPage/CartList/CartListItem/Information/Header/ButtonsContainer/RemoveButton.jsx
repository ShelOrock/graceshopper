import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as StyledComponents from '../../../../../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import * as reduxThunks from '../../../../../../../redux/thunks.jsx';
const { cartThunks: { removeProductFromCart } } = reduxThunks;

export default (cartItem) => {

  const dispatch = useDispatch();

  const { activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(removeProductFromCart(activeUser.id, cartItem.id))
  };

  const buttonProps = {
    variant: 'secondary',
    onClick: handleOnClick
  }

  return <Button { ...buttonProps }>Remove from cart</Button>;
};

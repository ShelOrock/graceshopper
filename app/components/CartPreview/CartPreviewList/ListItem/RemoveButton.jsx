import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as reduxThunks from '../../../../redux/thunks.jsx';
const { cartThunks: { removeProductFromCart } } = reduxThunks;

export default (cartItem) => {

  const dispatch = useDispatch();

  const { activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(removeProductFromCart(activeUser.id, cartItem.id));
  };

  const buttonProps = {
    onClick: handleOnClick,
    variant: 'secondary'
  };

  return <SmallButton { ...buttonProps }>X</SmallButton>
};

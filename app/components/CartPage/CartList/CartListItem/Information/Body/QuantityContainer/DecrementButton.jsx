import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Minus from '/public/img/minus-white.png';
import * as StyledComponents from '../../../../../../StyledComponents/index.jsx';
const {
  StyledButton: { SmallButton },
  StyledImage: { Icon }
} = StyledComponents;

import * as reduxThunks from '../../../../../../../redux/thunks.jsx';
const { cartThunks: { updateProductInCart } } = reduxThunks;

export default ({ quantity, product }) => {

  const dispatch = useDispatch();

  const { activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(updateProductInCart(
      activeUser.id,
      product.id,
      quantity - 1
    ));
  };

  const buttonProps = {
    disabled: quantity - 1 <= 0,
    onClick: handleOnClick
  }

  return (
    <SmallButton { ...buttonProps } >
      <Icon src={ Minus } alt='Minus' />
    </SmallButton>
  );
};

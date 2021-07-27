import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Plus from '/public/img/plus-white.png';
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
      quantity + 1
    ));
  };

  const buttonProps = {
    disabled: quantity + 1 > product.inventory,
    onClick: handleOnClick
  };

  return (
    <SmallButton { ...buttonProps } >
      <Icon src={ Plus } alt='Plus' />
    </SmallButton>
  );
};

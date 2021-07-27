import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddToCartButtonTextIcon from './AddToCartButtonTextIcon';
import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import * as reduxThunks from '../../../../../redux/thunks.jsx';
const { cartThunks: { addProductToCart } } = reduxThunks;

export default ({ product, quantityToAdd }) => {

  const dispatch = useDispatch();

  const { activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(addProductToCart(activeUser.id, product.id, quantityToAdd));
  };

  return (
    <Button onClick={ handleOnClick }>
      <AddToCartButtonTextIcon />
    </Button>
  );
};

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledButton: { Button } } = StyledComponents;

import * as reduxThunks from '../../redux/thunks/index.jsx';
const { cartThunks: { addProductToCart } } = reduxThunks;

export default (product) => {

  const dispatch = useDispatch();
  
  const {
    activeUser,
    cart
  } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(addProductToCart(product, cart, activeUser))
  };
  
  return <Button onClick={ handleOnClick }>+</Button>;
};

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from '/public/img/cart.png';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const {
  StyledButton: { Button },
  StyledImage: { Icon },
} = StyledComponents;

import * as reduxThunks from '../../../redux/thunks.jsx';
const { cartThunks: { addProductToCart } } = reduxThunks;

export default ({ product }) => {

  const dispatch = useDispatch();
  
  const { activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(addProductToCart(activeUser.id, product.id))
  };
  
  return (
    <Button variant='secondary' onClick={ handleOnClick }>
      <Icon src={ CartIcon } alt='Cart' />
    </Button>
  );
};

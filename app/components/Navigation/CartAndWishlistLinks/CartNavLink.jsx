import * as React from 'react';
const { useEffect } = React;
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from '../../../../public/img/cart.png';
import * as StyledComponents from '../../StyledComponents';
const {
  StyledType: { SmallBody },
  StyledNavigation: { NavButton },
  StyledImage: { Icon },
} = StyledComponents;

import * as reduxActions from '../../../redux/actions.jsx';
const { cartPreviewActions: { setCartPreview } } = reduxActions; 

export default () => {

  const location = useLocation();
  const dispatch = useDispatch();

  const { cart, cartPreview } = useSelector(state => state);

  useEffect(() => {
    dispatch(setCartPreview(false));
  }, [location]);

  const handleOnClick = () => {
    dispatch(setCartPreview(!cartPreview));
  };

  const sumCartItems = () => {
    return cart.cartItems && cart.cartItems.reduce((accum, curr) => {
      return accum + curr.quantity;
    }, 0);
  };

  return (
    <NavButton onClick={ handleOnClick }>
      <Icon src={ CartIcon } alt='Cart' />
      { cart.cartItems && <SmallBody>{ sumCartItems() }</SmallBody> }
    </NavButton>
  );
};
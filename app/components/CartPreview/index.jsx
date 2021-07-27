import * as React from 'react';
import { useSelector } from 'react-redux';

import CartPreviewContainer from './CartPreviewContainer.jsx';
import CartPreviewList from './CartPreviewList/index.jsx';
import ListItem from './CartPreviewList/ListItem/index.jsx'
import ButtonsContainer from './ButtonsContainer/index.jsx';
import CartButton from './ButtonsContainer/CartButton.jsx';
import CheckoutButton from './ButtonsContainer/CheckoutButton.jsx';

export default () => {

  const { cart } = useSelector(state => state);

  return (
    <CartPreviewContainer>
      <CartPreviewList>
        { cart.cartItems && !!cart.cartItems.length && cart.cartItems.map(cartItem => <ListItem key={ cartItem.id } { ...cartItem } />) }
      </CartPreviewList>
      <ButtonsContainer>
        <CartButton { ...cart } />
        <CheckoutButton { ...cart } />
      </ButtonsContainer>
    </CartPreviewContainer>
  );
};

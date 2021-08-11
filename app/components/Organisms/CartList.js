import * as React from 'react';

import CartContainer from '../Containers/Cart/Cart';
import LineList from '../Atoms/LineList';
import CartItem from '../Molecules/CartItem';

export default ({
  cartItems = [],
  wishlist = [],
  user = {}
}) => (
  <CartContainer>
    <LineList>
      { cartItems.map(cartItem => (
        <CartItem
          key={ cartItem.id }
          cartItem={ cartItem }
          wishlist={ wishlist }
          product={ cartItem.product }
          user={ user }
        />
      )) }
    </LineList>
  </CartContainer>
);

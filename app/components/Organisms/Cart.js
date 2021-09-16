import React from 'react';

import CartCard from '../Molecules/CartCard';
import { LayoutAtoms } from '../Atoms';

const Cart = ({
  cartItems = [],
  wishlist = [],
  user = {}
}) => (
  <LayoutAtoms.List>
    { cartItems.map(cartItem => (
      <CartCard
        key={ cartItem.id }
        cartItem={ cartItem }
        wishlist={ wishlist }
        product={ cartItem.product }
        user={ user }
      />
    )) }
  </LayoutAtoms.List>
);

export default Cart;

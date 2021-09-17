import React from 'react';
import { useSelector } from 'react-redux';

import CartTemplate from '../Templates/Cart';
import CartCard from '../Molecules/CartCard';
import List from '../Organisms/List';

const CartPage = () => {

  const {
    activeUser,
    cart: { cartItems },
    wishlist
  } = useSelector(state => state);

  return (
    <CartTemplate
      title={ 'Cart' }
      cart={
        <List
          listData={ cartItems }
          renderData={ cartItem => (
            <CartCard
              key={ cartItem.id }
              cartItem={ cartItem }
              product={ cartItem.product }
              wishlist={ wishlist }
              user={ activeUser }
            /> 
          ) }
        />
      }
    />
  );
};

export default CartPage;

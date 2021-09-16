import React from 'react';
import { useSelector } from 'react-redux';

import CartTemplate from '../Templates/Cart';
import Cart from '../Organisms/Cart';

const CartPage = () => {

  const {
    activeUser,
    cart: { cartItems }
  } = useSelector(state => state);

  return (
    <CartTemplate
      title={ 'Cart' }
      cart={ 
        <CartList
          cartItems={ cartItems }
          user={ activeUser }
        />
      }
    />
  );
};

export default CartPage;

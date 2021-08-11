import * as React from 'react';
import { useSelector } from 'react-redux';

import CartTemplate from '../Templates/Cart';
import CartList from '../Organisms/CartList';

export default () => {

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

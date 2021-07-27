import * as React from 'react';
import { useSelector } from 'react-redux'

import CartPageContainer from './CartPageContainer.jsx';
import CartList from './CartList/index.jsx';
import CartListItem from './CartList/CartListItem/index.jsx'
import EmptyShoppingCart from './EmptyShoppingCart/index.jsx';

export default () => {

  const { cart: { cartItems } } = useSelector(state => state);

  return (
    <CartPageContainer>
      { cartItems && !!cartItems.length
      ? <CartList>
          { cartItems.map(cartItem => <CartListItem key={ cartItem.id } { ...cartItem } />) }
        </CartList>
      : <EmptyShoppingCart />
      }
    </CartPageContainer>
  )
}

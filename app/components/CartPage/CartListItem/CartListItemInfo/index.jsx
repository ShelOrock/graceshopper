import * as React from 'react';

import CartListItemProductName from './CartListItemProductName.jsx';
import CartListItemPrice from './CartListItemPrice.jsx';

export default (cartItem) => (
  <>
    <CartListItemProductName { ...cartItem } />
    <CartListItemPrice { ...cartItem } />
  </>
)
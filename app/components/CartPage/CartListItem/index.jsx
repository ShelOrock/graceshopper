import * as React from 'react';

import CartListItemImage from './CartListItemImage.jsx';
import CartListItemInfo from './CartListItemInfo/index.jsx';
import CartListItemQuantityInput from './CartListItemQuantityInput.jsx';
import CartListItemSubTotal from './CartListItemSubTotal.jsx';
import CartListItemButtons from './CartListItemButtons.jsx';

export default (cartItem) => (
  <>
    <CartListItemImage { ...cartItem } />
    <CartListItemButtons { ...cartItem } />
  </>
)
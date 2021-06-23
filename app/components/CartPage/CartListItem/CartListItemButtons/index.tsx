import * as React from 'react';

import AddToWishlistCartItemButton from './AddToWishlistCartItemButton.jsx';
import DeleteCartItemButton from './DeleteCartItemButton.jsx';

export default (cartItem) => (
  <>
    <AddToWishlistCartItemButton { ...cartItem } />
    <DeleteCartItemButton { ...cartItem } />
  </>
);
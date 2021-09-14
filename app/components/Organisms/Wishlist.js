import * as React from 'react';

import WishlistItem from '../Molecules/WishlistItem';
import LineList from '../Atoms/Layout/List';

export default ({
  wishlist = [],
  user = {}
}) => (
  <LineList>
    { wishlist.map(wishlistItem => (
      <WishlistItem
        key={ wishlistItem.id }
        wishlistItem={ wishlistItem }
        user={ user }
      />
    )) }
  </LineList>
);

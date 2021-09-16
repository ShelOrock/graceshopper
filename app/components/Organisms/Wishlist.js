import React from 'react';

import WishlistCard from '../Molecules/WishlistCard';
import { LayoutAtoms } from '../Atoms';

const Wishlist = ({
  wishlist = [],
  user = {}
}) => (
  <LayoutAtoms.List>
    { wishlist.map(wishlistItem => (
      <WishlistCard
        key={ wishlistItem.id }
        wishlistItem={ wishlistItem }
        user={ user }
      />
    )) }
  </LayoutAtoms.List>
);

export default Wishlist;

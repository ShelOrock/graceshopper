import * as React from 'react';

import WishlistContainer from '../Containers/Wishlist/Wishlist';
import WishlistItem from '../Molecules/WishlistItem';
import LineList from '../Atoms/LineList';

export default ({
  wishlist = [],
  user = {}
}) => (
  <WishlistContainer>
    <LineList>
      { wishlist.map(wishlistItem => (
        <WishlistItem
          key={ wishlistItem.id }
          wishlistItem={ wishlistItem }
          user={ user }
        />
      )) }
    </LineList>
  </WishlistContainer>
);

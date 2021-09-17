import React from 'react';
import { useSelector } from 'react-redux';

import WishlistTemplate from '../Templates/Wishlist';
import List from '../Organisms/List';
import WishlistCard from '../Molecules/WishlistCard';

export default () => {

  const { wishlist, activeUser } = useSelector(state => state);

  return (
    <WishlistTemplate
      title={ 'Wishlist' }
      wishlist={
        <List
          listData={ wishlist }
          renderData={ wishlistItem => (
            <WishlistCard
              key={ wishlistItem.id }
              wishlistItem={ wishlistItem }
              user={ activeUser }
            />
          ) }
          wishlist={ wishlist.products }
          user={ activeUser }
        />
      }
    />
  );
};

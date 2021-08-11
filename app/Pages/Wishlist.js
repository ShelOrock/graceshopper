import React from 'react';
import { useSelector } from 'react-redux';

import WishlistTemplate from '../Components/Templates/Wishlist';
import Wishlist from '../Components/Organisms/Wishlist';

export default () => {

  const { wishlist, activeUser } = useSelector(state => state);

  return (
    <WishlistTemplate
      title={ 'Wishlist' }
      wishlist={
        <Wishlist
          wishlist={ wishlist.products }
          user={ activeUser }
        />
      }
    />
  );
};

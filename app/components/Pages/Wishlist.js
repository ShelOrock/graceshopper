import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { WishlistTemplate } from '../Templates';
import { List } from '../Organisms';
import { WishlistCard } from '../Molecules';

import { cartThunks, wishlistThunks } from '../../redux/thunks';

const WishlistPage = () => {

  const dispatch = useDispatch();
  const { wishlist, activeUser } = useSelector(state => state);

  return (
    <WishlistTemplate
      title={ 'Wishlist' }
      wishlist={
        <List
          listData={ wishlist.products }
          renderData={ wishlistItem => (
            <WishlistCard
              key={ wishlistItem.id }
              wishlistItem={ wishlistItem }
              dispatch={ dispatch }
              removeFromWishlist={() => wishlistThunks.removeFromWishlist(
                activeUser.id,
                { productId: wishlistItem.id }
              ) }
              addProductToCart={ () => cartThunks.addProductToCart(
                activeUser.id,
                { productId: wishlistItem.id, quantity: 1 }
              ) }
            />
          ) }
        />
      }
    />
  );
};

export default WishlistPage;

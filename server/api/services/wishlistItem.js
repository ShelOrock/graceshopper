import Sequelize from 'sequelize';

import { WishlistItem } from '../../db/index.js';

export const getWishlistItemByCartAndProduct = async (wishlistId, productId) => {
  try {
    const wishlistItem = await WishlistItem.findOne({
      where: Sequelize.and(
        { wishlistId },
        { productId }
      )
    });
    return wishlistItem;

  } catch(e) {
    throw Error(e.message, 'Error getting wishlist item by cart and product');
  };
};

export const createWishlistItem = async payload => {
  try {
    const wishlistItem = await WishlistItem.create(payload);
    return wishlistItem;

  } catch(e) {
    throw Error(e.message, 'Error creating wishlist item');
  };
};

export const destroyWishlistItem = async wishlistItemId => {
  try {
    await WishlistItem.destroy({
      where: { id: wishlistItemId }
    });

  } catch(e) {
    throw Error(e.message, 'Error destroying wishlist item');
  }
}
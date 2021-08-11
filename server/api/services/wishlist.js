import { Wishlist, Product } from '../../db/index.js';

export const getWishlist = async userId => {
  try {
    const wishlist = await Wishlist.findOne({
      where: { userId },
      include: [{ model: Product }],
    });
    return wishlist;

  } catch(e) {
    throw Error(e.message, 'Error getting wishlist');
  };
};

export const createWishlist = async payload => {
  try {
    const wishlist = await Wishlist.create(payload);
    return wishlist;

  } catch(e) {
    throw Error(e.message, 'Error creating wishlist');
  };
};
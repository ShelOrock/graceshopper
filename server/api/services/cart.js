import {
  Cart,
  CartItem,
  Product
} from '../../db/index.js'

export const getCart = async userId => {

  try {
    const cart = await Cart.findOne({
      where: { userId },
      include: [{
        model: CartItem,
        include: [{ model: Product }]
      }],
      order: [[ CartItem, 'createdAt', 'ASC' ]]

    });

    return cart;

  } catch(e) {
    throw Error('Error fetching cart')
  };
};

export const createCart = async userId => {

  try {
    const cart = await Cart.create({ userId });
    return cart;

  } catch(e) {
    throw Error('Error creating cart');
  };
};

export const destroyCart = async userId => {

  try {
    Cart.destroy({ where: userId });

  } catch(e) {
    throw Error('Error deleting cart');
  };
};



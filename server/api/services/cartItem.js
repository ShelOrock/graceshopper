import Sequelize from 'sequelize';

import { CartItem } from '../../db/index.js';

export const getCartItemByPrimaryKey = async cartItemId => {
  
  try {
    const cartItem = await CartItem.findByPk(cartItemId);
    return cartItem;

  } catch(e) {
    throw Error('Error getting cart item by primary key');
  }
}

export const getCartItemByCartAndProduct = async (cartId, productId) => {

    try {
    const cartItem = await CartItem.findOne({
      where: Sequelize.and(
        { cartId },
        { productId }
      )
    });

    return cartItem;

  } catch(e) {
    throw Error('Error getting cart item by cart and product')
  };
};

export const getAllCartItems = async cartId => {

  try {
    const cartItems = await CartItem.findAll({
      where: { cartId }
    })

    return cartItems;
    
  } catch(e) {
    throw Error('Error getting all cart items');
  }
}

export const createCartItem = async payload => {

  try {
    const cartItem = await CartItem.create(payload);

    return cartItem;

  } catch(e) {
    throw Error('Error creating cart item');
  };
};

export const increaseCartItemQuantity = async (cartItemId, payload) => {

  try {
    const cartItemToUpdate = await getCartItemByPrimaryKey(cartItemId);
    const updatedCartItem = await cartItemToUpdate.update(payload);
    return updatedCartItem;

  } catch(e) {
    throw Error('Error updating cart item quantity')
  };
};

export const updateCartItem = async (cartItem, payload) => {

  try {
    const updatedCartItem = await cartItem.update(payload);
    return updatedCartItem;

  } catch(e) {
    throw Error(e, 'Error updating cart item');
  };
};


export const removeCartItemFromCart = async (cart, cartItem) => {

  try {
    await cart.removeCartItem(cartItem);
  
  } catch(e) {
    throw Error('Error removing item from cart');
  };
};

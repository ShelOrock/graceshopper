import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartTemplate from '../Templates/Cart';
import CartCard from '../Molecules/CartCard';
import List from '../Organisms/List';

import { cartThunks, wishlistThunks } from '../../redux/thunks';

const CartPage = () => {

  const dispatch = useDispatch();

  const {
    activeUser,
    cart: { cartItems },
    wishlist
  } = useSelector(state => state);

  return (
    <CartTemplate
      title={ 'Cart' }
      cart={
        <List
          listData={ cartItems }
          renderData={ cartItem => (
            <CartCard
              key={ cartItem.id }
              cartItem={ cartItem }
              product={ cartItem.product }
              wishlist={ wishlist }
              user={ activeUser }
              removeItemFromCart={ () => cartThunks.removeProductFromCart(
                activeUser.id, 
                { cartItemId: cartItem.id }
              ) }
              addToWishlist={ () => wishlistThunks.addToWishlist(
                activeUser.id,
                { productId: cartItem.product.id }
              ) }
              decrementItemQuantity={ () => cartThunks.updateProductInCart(
                activeUser.id,
                { productId: cartItem.product.id, quantity: cartItem.quantity - 1 }
              ) }
              incrementItemQuantity={ () => cartThunks.updateProductInCart(
                activeUser.id,
                { productId: cartItem.product.id, quantity: cartItem.quantity + 1 }
              ) }
              dispatch={ dispatch }
            /> 
          ) }
        />
      }
    />
  );
};

export default CartPage;

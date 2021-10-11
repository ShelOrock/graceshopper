import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CartTemplate } from '../Templates';
import { List } from '../Organisms';
import { CartCard } from '../Molecules';

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
              user={ activeUser }
              decrementItemQuantity={ () => dispatch(cartThunks.updateProductInCart(
                activeUser.id,
                { productId: cartItem.product.id, quantity: cartItem.quantity - 1 }
              )) }
              incrementItemQuantity={ () => dispatch(cartThunks.updateProductInCart(
                activeUser.id,
                { productId: cartItem.product.id, quantity: cartItem.quantity + 1 }
              )) }
              removeProductFromCart={ () => dispatch(cartThunks.removeProductFromCart(
                activeUser.id, 
                { cartItemId: cartItem.id }
              )) }
              addToWishlist={ () => dispatch(wishlistThunks.addToWishlist(
                activeUser.id,
                { productId: cartItem.product.id }
              )) }
              productOnWishlist={ !!wishlist.products.length && wishlist.products.map(item => item.id).includes(cartItem.product.id) }
            /> 
          ) }
        />
      }
    />
  );
};

export default CartPage;

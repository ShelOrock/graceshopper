import React from 'react';

import Minus from '/public/img/minus.png';
import Plus from '/public/img/plus.png';
import Heart from '/public/img/heart.png';
import BlackHeart from '/public/img/heart-black.png';
import { CartCardContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms
} from '../Atoms';
import Link from '../Atoms/Link';

import { cartThunks, wishlistThunks } from '../../redux/thunks';

const CartCard = ({
  cartItem = {},
  product = {},
  wishlist = [],
  user = {},
}) => (
  <CartCardContainers.Main>
    <CartCardContainers.Media>
      <MediaAtoms.Image src={ product.productImage } />
    </CartCardContainers.Media>
    <CartCardContainers.Content>
      <CartCardContainers.Header>
        <CartCardContainers.Information>
          <Link to={ `/products/${ product.id }` }>
            <TypeAtoms.Heading>{ product.productName }</TypeAtoms.Heading>
          </Link>
          <TypeAtoms.SubHeading>${ product.unitPrice }</TypeAtoms.SubHeading>
        </CartCardContainers.Information>
        <CartCardContainers.Actions>
        { user.isLoggedIn && (
          <ButtonAtoms.DispatchButton 
            onClick={ () => wishlistThunks.addToWishlist(
              user.id,
              { productId: product.id }
            ) }
            variant='secondary'
          >
            { !!wishlist.length
              && wishlist
              .map(item => item.id)
              .includes(product.id) 
              ? <MediaAtoms.Icon src={ BlackHeart } />
              : <MediaAtoms.Icon src={ Heart } />
            }
          </ButtonAtoms.DispatchButton>
        ) }
          <ButtonAtoms.DispatchButton
            onClick={ () => cartThunks.removeProductFromCart(
            user.id, 
            { cartItemId: cartItem.id }
          ) }
          variant='secondary'
          >
            Remove from Cart
          </ButtonAtoms.DispatchButton>
        </CartCardContainers.Actions>
      </CartCardContainers.Header>
      <CartCardContainers.Body>
        <CartCardContainers.QuantityActions>
          <ButtonAtoms.DispatchButton
            onClick={ () => cartThunks.updateProductInCart(
              user.id,
              { productId: product.id, quantity: cartItem.quantity - 1 }
            ) }
            disabled={ cartItem.quantity - 1 <= 0 }
            variant='secondary'
          >
            <MediaAtoms.Image src={ Minus } />
          </ButtonAtoms.DispatchButton>
          <TypeAtoms.Body>{ cartItem.quantity }</TypeAtoms.Body>
          <ButtonAtoms.DispatchButton
            onClick={ () => cartThunks.updateProductInCart(
              user.id,
              { productId: product.id, quantity: cartItem.quantity + 1 }
            )}
            disabled={ cartItem.quantity + 1 > product.inventory }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ Plus } />
          </ButtonAtoms.DispatchButton>
        </CartCardContainers.QuantityActions>
        <TypeAtoms.Body>Subtotal: ${ (cartItem.quantity * product.unitPrice).toFixed(2) }</TypeAtoms.Body>
      </CartCardContainers.Body>
    </CartCardContainers.Content>
  </CartCardContainers.Main>
);

export default CartCard;

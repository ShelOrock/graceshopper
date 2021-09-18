import React from 'react';

import Minus from '/public/img/minus.png';
import Plus from '/public/img/plus.png';
import Heart from '/public/img/heart.png';
import BlackHeart from '/public/img/heart-black.png';
import { CartCardContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';

const CartCard = ({
  cartItem = {},
  product = {},
  wishlist = [],
  user = {},
  removeItemFromCart,
  addToWishlist,
  decrementItemQuantity,
  incrementItemQuantity,
  dispatch,
}) => (
  <CartCardContainers.Main>
    <CartCardContainers.Media>
      <MediaAtoms.Image src={ product.productImage } />
    </CartCardContainers.Media>
    <CartCardContainers.Content>
      <CartCardContainers.Header>
        <CartCardContainers.Information>
          <NavigationAtoms.TextLink to={ `/products/${ product.id }` }>
            <TypeAtoms.Heading>{ product.productName }</TypeAtoms.Heading>
          </NavigationAtoms.TextLink>
          <TypeAtoms.SubHeading>${ product.unitPrice }</TypeAtoms.SubHeading>
        </CartCardContainers.Information>
        <CartCardContainers.Actions>
        { user.isLoggedIn && (
          <ButtonAtoms.Button 
            onClick={ addToWishlist }
            dispatch={ dispatch }
            variant='secondary'
          >
            { !!wishlist.length
              && wishlist
              .map(item => item.id)
              .includes(product.id) 
              ? <MediaAtoms.Icon src={ BlackHeart } />
              : <MediaAtoms.Icon src={ Heart } />
            }
          </ButtonAtoms.Button>
        ) }
          <ButtonAtoms.Button
            onClick={ removeItemFromCart }
            dispatch={ dispatch }
            variant='secondary'
          >
            Remove from Cart
          </ButtonAtoms.Button>
        </CartCardContainers.Actions>
      </CartCardContainers.Header>
      <CartCardContainers.Body>
        <CartCardContainers.QuantityActions>
          <ButtonAtoms.Button
            onClick={ decrementItemQuantity }
            dispatch={ dispatch }
            disabled={ cartItem.quantity - 1 <= 0 }
            variant='secondary'
          >
            <MediaAtoms.Image src={ Minus } />
          </ButtonAtoms.Button>
          <TypeAtoms.Body>{ cartItem.quantity }</TypeAtoms.Body>
          <ButtonAtoms.Button
            onClick={ incrementItemQuantity }
            dispatch={ dispatch }
            disabled={ cartItem.quantity + 1 > product.inventory }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ Plus } />
          </ButtonAtoms.Button>
        </CartCardContainers.QuantityActions>
        <TypeAtoms.Body>Subtotal: ${ (cartItem.quantity * product.unitPrice).toFixed(2) }</TypeAtoms.Body>
      </CartCardContainers.Body>
    </CartCardContainers.Content>
  </CartCardContainers.Main>
);

export default CartCard;

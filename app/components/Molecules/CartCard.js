import React from 'react';

import MinusIcon from '/public/img/minus.png';
import PlusIcon from '/public/img/plus.png';
import HeartIcon from '/public/img/heart.png';
import BlackHeartIcon from '/public/img/heart-black.png';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';
import { CartCardContainers } from '../Containers';

const CartCard = ({
  cartItem = {},
  product = {},
  user = {},
  decrementItemQuantity,
  incrementItemQuantity,
  removeProductFromCart,
  addToWishlist,
  productOnWishlist
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
            variant='secondary'
          >
            <MediaAtoms.Icon src={ productOnWishlist ? BlackHeartIcon : HeartIcon } />
          </ButtonAtoms.Button>
        ) }
          <ButtonAtoms.Button
            onClick={ removeProductFromCart }
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
            disabled={ cartItem.quantity - 1 <= 0 }
            variant='secondary'
          >
            <MediaAtoms.Image src={ MinusIcon } />
          </ButtonAtoms.Button>
          <TypeAtoms.Body>{ cartItem.quantity }</TypeAtoms.Body>
          <ButtonAtoms.Button
            onClick={ incrementItemQuantity }
            disabled={ cartItem.quantity + 1 > product.inventory }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ PlusIcon } />
          </ButtonAtoms.Button>
        </CartCardContainers.QuantityActions>
        <TypeAtoms.Body>Subtotal: ${ (cartItem.quantity * product.unitPrice).toFixed(2) }</TypeAtoms.Body>
      </CartCardContainers.Body>
    </CartCardContainers.Content>
  </CartCardContainers.Main>
);

export default CartCard;

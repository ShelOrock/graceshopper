import * as React from 'react';

import CartIcon from '/public/img/cart.png';
import HeartIcon from '/public/img/heart.png';
import BlackHeartIcon from '/public/img/heart-black.png';
import { ProductCardContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';

import { cartThunks, wishlistThunks } from '../../redux/thunks';

export default ({
  product = {},
  wishlist = [],
  user = {}
}) => (
  <ProductCardContainers.Main>
    <ProductCardContainers.Actions>
      <ButtonAtoms.DispatchButton
        onClick={ () => cartThunks.addProductToCart(
          user.id,
          { productId: product.id, quantity: 1 }
        ) }
        variant='secondary'
      >
        <MediaAtoms.Icon src={ CartIcon } />
      </ButtonAtoms.DispatchButton>
      { user.isLoggedIn && (
      <ButtonAtoms.DispatchButton
        onClick={ () => wishlistThunks.addToWishlist(
          user.id,
          { productId: product.id }
        ) }
        variant='secondary'
      >
        { !!wishlist.length && wishlist.map(item => item.id).includes(product.id)
        ? <MediaAtoms.Icon src={ BlackHeartIcon } />
        : <MediaAtoms.Icon src={ HeartIcon } />
        }
      </ButtonAtoms.DispatchButton>
      ) }
    </ProductCardContainers.Actions>
    <NavigationAtoms.ButtonLink to={ `/products/${ product.id }` }>
      <ProductCardContainers.Media>
        <MediaAtoms.Image src={ product.productImage } />
      </ProductCardContainers.Media>
      <ProductCardContainers.Information>
        <TypeAtoms.Heading>{ product.productName }</TypeAtoms.Heading>
        <TypeAtoms.SubHeading>{ product.unitPrice }</TypeAtoms.SubHeading>
      </ProductCardContainers.Information>
    </NavigationAtoms.ButtonLink>
  </ProductCardContainers.Main>
);

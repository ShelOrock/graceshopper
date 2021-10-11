import React from 'react';

import CartIcon from '/public/img/cart.png';
import HeartIcon from '/public/img/heart.png';
import BlackHeartIcon from '/public/img/heart-black.png';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';
import { ProductCardContainers } from '../Containers';

const ProductCard = ({
  product = {},
  user = {},
  addProductToCart,
  addToWishlist,
  productOnWishlist
}) => (
  <ProductCardContainers.Main>
    <ProductCardContainers.Actions>
      <ButtonAtoms.Button
        onClick={ addProductToCart }
        variant='secondary'
      >
        <MediaAtoms.Icon src={ CartIcon } />
      </ButtonAtoms.Button>
      { user.isLoggedIn && (
      <ButtonAtoms.Button
        onClick={ addToWishlist }
        variant='secondary'
      >
        <MediaAtoms.Icon src={ productOnWishlist ? BlackHeartIcon : HeartIcon } />
      </ButtonAtoms.Button>
      ) }
    </ProductCardContainers.Actions>
    <NavigationAtoms.TextLink to={ `/products/${ product.id }` }>
      <ProductCardContainers.Media>
        <MediaAtoms.Image src={ product.productImage } />
      </ProductCardContainers.Media>
      <ProductCardContainers.Information>
        <TypeAtoms.Heading>{ product.productName }</TypeAtoms.Heading>
        <TypeAtoms.SubHeading>{ product.unitPrice }</TypeAtoms.SubHeading>
      </ProductCardContainers.Information>
    </NavigationAtoms.TextLink>
  </ProductCardContainers.Main>
);

export default ProductCard;

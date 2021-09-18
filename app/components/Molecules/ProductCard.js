import React from 'react';

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

const ProductCard = ({
  product = {},
  wishlist = [],
  user = {},
  addProductToCart,
  dispatch
}) => (
  <ProductCardContainers.Main>
    <ProductCardContainers.Actions>
      <ButtonAtoms.Button
        onClick={ addProductToCart }
        dispatch={ dispatch }
        variant='secondary'
      >
        <MediaAtoms.Icon src={ CartIcon } />
      </ButtonAtoms.Button>
      { user.isLoggedIn && (
      <ButtonAtoms.Button
        onClick={ wishlistThunks.addToWishlist(
          user.id,
          { productId: product.id }
        ) }
        dispatch={ dispatch }
        variant='secondary'
      >
        { !!wishlist.length && wishlist.map(item => item.id).includes(product.id)
        ? <MediaAtoms.Icon src={ BlackHeartIcon } />
        : <MediaAtoms.Icon src={ HeartIcon } />
        }
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

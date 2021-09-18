import React from 'react';

import Plus from '/public/img/plus.png';
import Minus from '/public/img/minus.png'
import Cart from '/public/img/cart.png';
import Heart from '/public/img/heart.png';
import BlackHeart from '/public/img/heart-black.png'
import { ProductContainers, MediaContainers } from '../Containers';
import {
  TypeAtoms,
  ButtonAtoms,
  MediaAtoms
} from '../Atoms';

import { cartThunks, wishlistThunks } from '../../redux/thunks';

const Product = ({
  product = {},
  user = {},
  quantityToAdd = 1,
  removeProductFromCart,
  decrementQuantityToAdd,
  incrementQuantityToAdd,
  wishlist= [],
  dispatch
}) => (
  <ProductContainers.Main>
    <ProductContainers.Media>
      <MediaAtoms.Image src={ product.productImage } />
    </ProductContainers.Media>
    <ProductContainers.Content>
      <ProductContainers.Header>
        <ProductContainers.Information>
          <TypeAtoms.Title>{ product.productName }</TypeAtoms.Title>
          <TypeAtoms.SubTitle>{ product.unitPrice }</TypeAtoms.SubTitle>
          <ProductContainers.Description>
            <TypeAtoms.Body>{ product.productDescription }</TypeAtoms.Body>
          </ProductContainers.Description>
        </ProductContainers.Information>
        <ProductContainers.Actions>
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
              ? <MediaAtoms.Icon src={ BlackHeart } />
              : <MediaAtoms.Icon src={ Heart } />
              }
            </ButtonAtoms.Button>
          ) }
        </ProductContainers.Actions>
      </ProductContainers.Header>
      <ProductContainers.Body>
        <ProductContainers.QuantityActions>
          <ButtonAtoms.Button
            onClick={ decrementQuantityToAdd }
            disabled={ quantityToAdd - 1 <= 0 }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ Minus }/>
          </ButtonAtoms.Button>
          <TypeAtoms.SmallBody>{ quantityToAdd }</TypeAtoms.SmallBody>
          <ButtonAtoms.Button
            onClick={ incrementQuantityToAdd }
            disabled={ quantityToAdd + 1 > product.inventory }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ Plus }/>
          </ButtonAtoms.Button>
        </ProductContainers.QuantityActions>
        <ButtonAtoms.Button 
          onClick={ removeProductFromCart }
          dispatch={ dispatch }
          variant='secondary'
        >
          <MediaContainers.Main>
            <MediaAtoms.Icon src={ Cart } />
            <TypeAtoms.ButtonType>Add to cart</TypeAtoms.ButtonType>
          </MediaContainers.Main>
        </ButtonAtoms.Button>
      </ProductContainers.Body>
    </ProductContainers.Content>
  </ProductContainers.Main>
);

export default Product;

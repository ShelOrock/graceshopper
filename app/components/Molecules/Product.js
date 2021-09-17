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
  setQuantityToAdd,
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
            <ButtonAtoms.DispatchButton
              onClick={ () => wishlistThunks.addToWishlist(
                user.id, 
                { productId: product.id }
              ) }
              variant='secondary'
            >
              { !!wishlist.length && wishlist.map(item => item.id).includes(product.id) 
              ? <MediaAtoms.Icon src={ BlackHeart } />
              : <MediaAtoms.Icon src={ Heart } />
              }
            </ButtonAtoms.DispatchButton>
          ) }
        </ProductContainers.Actions>
      </ProductContainers.Header>
      <ProductContainers.Body>
        <ProductContainers.QuantityActions>
          <ButtonAtoms.Button
            onClick={ () => setQuantityToAdd(quantityToAdd - 1) }
            disabled={ quantityToAdd - 1 <= 0 }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ Minus }/>
          </ButtonAtoms.Button>
          <TypeAtoms.SmallBody>{ quantityToAdd }</TypeAtoms.SmallBody>
          <ButtonAtoms.Button
            onClick={ () => setQuantityToAdd(quantityToAdd + 1) }
            disabled={ quantityToAdd + 1 > product.inventory }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ Plus }/>
          </ButtonAtoms.Button>
        </ProductContainers.QuantityActions>
        <ButtonAtoms.DispatchButton 
          onClick={ () => cartThunks.addProductToCart(
            user.id,
            { productId: product.id, quantity: quantityToAdd || 1 }
          )}
          variant='secondary'
        >
          <MediaContainers.Main>
            <MediaAtoms.Icon src={ Cart } />
            <TypeAtoms.ButtonType>Add to cart</TypeAtoms.ButtonType>
          </MediaContainers.Main>
        </ButtonAtoms.DispatchButton>
      </ProductContainers.Body>
    </ProductContainers.Content>
  </ProductContainers.Main>
);

export default Product;

import React from 'react';

import PlusIcon from '/public/img/plus.png';
import MinusIcon from '/public/img/minus.png'
import CartIcon from '/public/img/cart.png';
import HeartIcon from '/public/img/heart.png';
import BlackHeartIcon from '/public/img/heart-black.png';
import {
  TypeAtoms,
  ButtonAtoms,
  MediaAtoms
} from '../Atoms';
import { ProductContainers, MediaContainers } from '../Containers';

const Product = ({
  product = {},
  user = {},
  quantityToAdd = 1,
  decrementQuantityToAdd,
  incrementQuantityToAdd,
  addProductToCart,
  addToWishlist,
  productOnWishlist
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
              onClick={ addToWishlist }
              variant='secondary'
            >
              <MediaAtoms.Icon src={ productOnWishlist ? BlackHeartIcon : HeartIcon } />
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
            <MediaAtoms.Icon src={ MinusIcon }/>
          </ButtonAtoms.Button>
          <TypeAtoms.SmallBody>{ quantityToAdd }</TypeAtoms.SmallBody>
          <ButtonAtoms.Button
            onClick={ incrementQuantityToAdd }
            disabled={ quantityToAdd + 1 > product.inventory }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ PlusIcon }/>
          </ButtonAtoms.Button>
        </ProductContainers.QuantityActions>
        <ButtonAtoms.Button 
          onClick={ addProductToCart }
          variant='secondary'
        >
          <MediaContainers.Main>
            <MediaAtoms.Icon src={ CartIcon } />
            <TypeAtoms.ButtonType>Add to cart</TypeAtoms.ButtonType>
          </MediaContainers.Main>
        </ButtonAtoms.Button>
      </ProductContainers.Body>
    </ProductContainers.Content>
  </ProductContainers.Main>
);

export default Product;

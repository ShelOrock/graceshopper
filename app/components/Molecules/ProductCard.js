import * as React from 'react';
import CartIcon from '/public/img/cart.png';
import HeartIcon from '/public/img/heart.png';
import BlackHeartIcon from '/public/img/heart-black.png';

import ProductCardContainer from '../Containers/ProductCard/ProductCard';
import ButtonsContainer from '../Containers/ProductCard/Buttons';
import InformationContainer from '../Containers/ProductCard/Information';

import DispatchButton from '../Atoms/DispatchButton';
import CardImage from '../Atoms/CardImage';
import Heading from '../Atoms/Heading';
import SubHeading from '../Atoms/SubHeading';
import Link from '../Atoms/Link';
import Icon from '../Atoms/Icon';

import * as reduxThunks from '../../redux/thunks';
const {
  cartThunks: { addProductToCart },
  wishlistThunks: { addToWishlist }
} = reduxThunks;

export default ({
  product = {},
  wishlist = [],
  user = {}
}) => (
  <ProductCardContainer>
    <ButtonsContainer>
      <DispatchButton
        onClick={ () => addProductToCart(
          user.id,
          { productId: product.id, quantity: 1 }
        ) }
        variant='secondary'
      >
        <Icon src={ CartIcon } />
      </DispatchButton>
      { user.isLoggedIn && (
      <DispatchButton
        onClick={ () => addToWishlist(
          user.id,
          { productId: product.id }
        ) }
        variant='secondary'
      >
        { !!wishlist.length && wishlist.map(item => item.id).includes(product.id)
        ? <Icon src={ BlackHeartIcon } />
        : <Icon src={ HeartIcon } />
        }
      </DispatchButton>
      ) }
    </ButtonsContainer>
    <Link to={ `/products/${ product.id }` }>
      <CardImage src={ product.productImage } />
      <InformationContainer>
        <Heading>{ product.productName }</Heading>
        <SubHeading>{ product.unitPrice }</SubHeading>
      </InformationContainer>
    </Link>
  </ProductCardContainer>
);

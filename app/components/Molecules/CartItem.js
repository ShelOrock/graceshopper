import * as React from 'react';
import Minus from '/public/img/minus.png';
import Plus from '/public/img/plus.png';
import Heart from '/public/img/heart.png';
import BlackHeart from '/public/img/heart-black.png';

import CartItemContainer from '../Containers/CartItem/CartItem';
import ContentContainer from '../Containers/CartItem/Content';
import HeaderContainer from '../Containers/CartItem/Header';
import InformationContainer from '../Containers/CartItem/Information';
import ButtonsContainer from '../Containers/CartItem/Buttons';
import BodyContainer from '../Containers/CartItem/Body';
import QuantityContainer from '../Containers/CartItem/Quantity';
import Thumbnail from '../Atoms/Thumbnail';
import Icon from '../Atoms/Icon'
import DispatchButton from '../Atoms/DispatchButton';
import Heading from '../Atoms/Heading';
import SubHeading from '../Atoms/SubHeading';
import Link from '../Atoms/Link';
import Body from '../Atoms/Body';

import * as reduxThunks from '../../redux/thunks';
const {
  cartThunks: { removeProductFromCart, updateProductInCart },
  wishlistThunks: { addToWishlist }
} = reduxThunks;

export default ({
  cartItem = {},
  product = {},
  wishlist = [],
  user = {},
}) => (
  <CartItemContainer>
    <Thumbnail src={ product.productImage } />
    <ContentContainer>
      <HeaderContainer>
        <InformationContainer>
          <Link to={ `/products/${ product.id }` }>
            <Heading>{ product.productName }</Heading>
          </Link>
          <SubHeading>${ product.unitPrice }</SubHeading>
        </InformationContainer>
        <ButtonsContainer>
        { user.isLoggedIn && (
          <DispatchButton 
            onClick={ () => addToWishlist(
              user.id,
              { productId: product.id }
            ) }
            variant='secondary'
          >
            { !!wishlist.length
              && wishlist
              .map(item => item.id)
              .includes(product.id) 
              ? <Icon src={ BlackHeart } />
              : <Icon src={ Heart } />
            }
          </DispatchButton>
        ) }
          <DispatchButton
            onClick={ () => removeProductFromCart(
            user.id, 
            { cartItemId: cartItem.id }
          ) }
          variant='secondary'
          >
            Remove from Cart
          </DispatchButton>
        </ButtonsContainer>
      </HeaderContainer>
      <BodyContainer>
        <QuantityContainer>
          <DispatchButton
            onClick={ () => updateProductInCart(
              user.id,
              { productId: product.id, quantity: cartItem.quantity - 1 }
            ) }
            disabled={ cartItem.quantity - 1 <= 0 }
            variant='secondary'
          >
            <Icon src={ Minus } />
          </DispatchButton>
          <Body>{ cartItem.quantity }</Body>
          <DispatchButton
            onClick={ () => updateProductInCart(
              user.id,
              { productId: product.id, quantity: cartItem.quantity + 1 }
            )}
            disabled={ cartItem.quantity + 1 > product.inventory }
            variant='secondary'
          >
            <Icon src={ Plus } />
          </DispatchButton>
        </QuantityContainer>
        <Body>Subtotal: ${ (cartItem.quantity * product.unitPrice).toFixed(2) }</Body>
      </BodyContainer>
    </ContentContainer>
  </CartItemContainer>
);
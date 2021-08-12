import * as React from 'react';
import Plus from '/public/img/plus.png';
import Minus from '/public/img/minus.png'
import Cart from '/public/img/cart.png';
import Heart from '/public/img/heart.png';
import BlackHeart from '/public/img/heart-black.png'

import ProductContainer from '../Containers/Product/Product';
import ContentContainer from '../Containers/Product/Content';
import HeaderContainer from '../Containers/Product/Header';
import BodyContainer from '../Containers/Product/Body';
import InformationContainer from '../Containers/Product/Information';
import DescriptionContainer from '../Containers/Product/Description';
import ButtonsContainer from '../Containers/Product/Buttons';
import QuantityContainer from '../Containers/Product/Quantity';
import IconTextContainer from '../Containers/IconText';
import Image from '../Atoms/Image';
import Icon from '../Atoms/Icon';
import Title from '../Atoms/Title';
import SubTitle from '../Atoms/SubTitle';
import Body from '../Atoms/Body';
import SmallBody from '../Atoms/SmallBody';
import ButtonType from '../Atoms/ButtonType';
import Button from '../Atoms/Button';
import DispatchButton from '../Atoms/DispatchButton';

import * as reduxThunks from '../../redux/thunks';
const {
  cartThunks: { addProductToCart },
  wishlistThunks: { addToWishlist }
} = reduxThunks;

export default ({
  product = {},
  user = {},
  quantityToAdd = 1,
  setQuantityToAdd,
  wishlist= [],
}) => (
   <ProductContainer>
    <Image src={ product.productImage } />
    <ContentContainer>
      <HeaderContainer>
        <InformationContainer>
          <Title>{ product.productName }</Title>
          <SubTitle>{ product.unitPrice }</SubTitle>
          <DescriptionContainer>
            <Body>{ product.productDescription }</Body>
          </DescriptionContainer>
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
              { !!wishlist.length && wishlist.map(item => item.id).includes(product.id) 
              ? <Icon src={ BlackHeart } />
              : <Icon src={ Heart } />
              }
            </DispatchButton>
          ) }
        </ButtonsContainer>
      </HeaderContainer>
      <BodyContainer>
        <QuantityContainer>
          <Button
            onClick={ () => setQuantityToAdd(quantityToAdd - 1) }
            disabled={ quantityToAdd - 1 <= 0 }
            variant='secondary'
          >
            <Icon src={ Minus }/>
          </Button>
          <SmallBody>{ quantityToAdd }</SmallBody>
          <Button
            onClick={ () => setQuantityToAdd(quantityToAdd + 1) }
            disabled={ quantityToAdd + 1 > product.inventory }
            variant='secondary'
          >
            <Icon src={ Plus }/>
          </Button>
        </QuantityContainer>
        <DispatchButton 
          onClick={ () => addProductToCart(
            user.id,
            { productId: product.id, quantity: quantityToAdd || 1 }
          )}
          variant='secondary'
        >
          <IconTextContainer>
            <Icon src={ Cart } />
            <ButtonType>Add to cart</ButtonType>
          </IconTextContainer>
        </DispatchButton>
      </BodyContainer>
    </ContentContainer>
  </ProductContainer>
)

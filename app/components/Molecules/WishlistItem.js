import React from 'react';
import BlackHeart from '/public/img/heart-black.png';

import WishlistItemContainer from '../Containers/WishlistItem/WishlistItem';
import DispatchButton from '../Atoms/DispatchButton';
import Heading from '../Atoms/Heading';
import Link from '../Atoms/Link';
import Icon from '../Atoms/Icon';
import SubHeading from '../Atoms/SubHeading';
import Thumbnail from '../Atoms/Thumbnail';
import BodyContainer from '../Containers/WishlistItem/Body';
import HeaderButtonContainer from '../Containers/WishlistItem/HeaderButton';
import ContentContainer from '../Containers/WishlistItem/Content';
import HeaderContainer from '../Containers/WishlistItem/Header';
import InformationContainer from '../Containers/WishlistItem/Information';
import BodyButtonContainer from '../Containers/WishlistItem/BodyButton';

import * as reduxThunks from '../../redux/thunks';
const {
  cartThunks: { addProductToCart },
  wishlistThunks: { removeFromWishlist }
} = reduxThunks;

export default ({
  wishlistItem = {},
  user = {}
}) => (
  <WishlistItemContainer>
    <Thumbnail src={ wishlistItem.productImage } />
    <ContentContainer>
      <HeaderContainer>
        <InformationContainer>
          <Link to={ `/product/${ wishlistItem.id }` }>
            <Heading>{ wishlistItem.productName }</Heading>
          </Link>
          <SubHeading>{ wishlistItem.unitPrice }</SubHeading>
        </InformationContainer>
        <HeaderButtonContainer>
          <DispatchButton
            onClick={ () => removeFromWishlist(
              user.id,
              { productId: wishlistItem.id }
            ) }
            variant='secondary'
          >
            <Icon src={ BlackHeart } />
          </DispatchButton>
        </HeaderButtonContainer>
      </HeaderContainer>
      <BodyContainer>
        <BodyButtonContainer>
          <DispatchButton
            onClick={ () => addProductToCart(
              user.id,
              { productId: wishlistItem.id, quantity: 1 }
            ) }
            variant='secondary'
          >
            Add to cart
          </DispatchButton>
        </BodyButtonContainer>
      </BodyContainer>
    </ContentContainer>
  </WishlistItemContainer>
);
import React from 'react';

import BlackHeart from '/public/img/heart-black.png';
import { WishlistCardContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';

import { cartThunks, wishlistThunks } from '../../redux/thunks';

const WishlistCard = ({
  wishlistItem = {},
  user = {}
}) => (
  <WishlistCardContainers.Main>
    <WishlistCardContainers.Media>
      <MediaAtoms.Image src={ wishlistItem.productImage } />
    </WishlistCardContainers.Media>
    <WishlistCardContainers.Content>
      <WishlistCardContainers.Header>
        <WishlistCardContainers.Information>
          <NavigationAtoms.TextLink to={ `/product/${ wishlistItem.id }` }>
            <TypeAtoms.Heading>{ wishlistItem.productName }</TypeAtoms.Heading>
          </NavigationAtoms.TextLink>
          <TypeAtoms.SubHeading>{ wishlistItem.unitPrice }</TypeAtoms.SubHeading>
        </WishlistCardContainers.Information>
        <WishlistCardContainer.HeaderActions>
          <ButtonAtoms.DispatchButton
            onClick={ () => wishlistThunks.removeFromWishlist(
              user.id,
              { productId: wishlistItem.id }
            ) }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ BlackHeart } />
          </ButtonAtoms.DispatchButton>
        </WishlistCardContainer.HeaderActions>
      </WishlistCardContainers.Header>
      <WishlistCardContainers.Body>
        <WishlistCardContainers.BodyActions>
          <ButtonAtoms.DispatchButton
            onClick={ () => cartThunks.addProductToCart(
              user.id,
              { productId: wishlistItem.id, quantity: 1 }
            ) }
            variant='secondary'
          >
            Add to cart
          </ButtonAtoms.DispatchButton>
        </WishlistCardContainers.BodyActions>
      </WishlistCardContainers.Body>
    </WishlistCardContainers.Content>
  </WishlistCardContainers.Main>
);

export default WishlistCard;
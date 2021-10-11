import React from 'react';

import BlackHeart from '/public/img/heart-black.png';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';
import { WishlistCardContainers } from '../Containers';

const WishlistCard = ({
  wishlistItem = {},
  removeFromWishlist,
  addProductToCart
}) => (
  <WishlistCardContainers.Main>
    <WishlistCardContainers.Media>
      <MediaAtoms.Image src={ wishlistItem.productImage } />
    </WishlistCardContainers.Media>
    <WishlistCardContainers.Content>
      <WishlistCardContainers.Header>
        <WishlistCardContainers.Information>
          <NavigationAtoms.TextLink to={ `/products/${ wishlistItem.id }` }>
            <TypeAtoms.Heading>{ wishlistItem.productName }</TypeAtoms.Heading>
          </NavigationAtoms.TextLink>
          <TypeAtoms.SubHeading>{ wishlistItem.unitPrice }</TypeAtoms.SubHeading>
        </WishlistCardContainers.Information>
        <WishlistCardContainers.HeaderActions>
          <ButtonAtoms.Button
            onClick={ removeFromWishlist }
            variant='secondary'
          >
            <MediaAtoms.Icon src={ BlackHeart } />
          </ButtonAtoms.Button>
        </WishlistCardContainers.HeaderActions>
      </WishlistCardContainers.Header>
      <WishlistCardContainers.Body>
        <WishlistCardContainers.BodyActions>
          <ButtonAtoms.Button
            onClick={ addProductToCart }
            variant='secondary'
          >
            Add to cart
          </ButtonAtoms.Button>
        </WishlistCardContainers.BodyActions>
      </WishlistCardContainers.Body>
    </WishlistCardContainers.Content>
  </WishlistCardContainers.Main>
);

export default WishlistCard;
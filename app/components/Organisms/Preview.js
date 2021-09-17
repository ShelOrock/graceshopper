import React from 'react';

import { PreviewContainers } from '../Containers';
import {
  TypeAtoms,
  LayoutAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';
import PreviewCard from '../Molecules/PreviewCard';

const Preview = ({
  cartItems = [],
  user = {},
}) => (
  <PreviewContainers.Main>
    <TypeAtoms.Heading>Cart Preview</TypeAtoms.Heading>
    <LayoutAtoms.List>
      { !!cartItems.length && cartItems.map(cartItem => (
        <PreviewCard
          key={ cartItem.id }
          cartItem={ cartItem }
          product={ cartItem.product }
          user={ user }
        />
      )) }
    </LayoutAtoms.List>
    <PreviewContainers.Actions>
      <NavigationAtoms.TextLink to={ '/cart' }>
        <ButtonAtoms.Button variant='secondary'>Cart</ButtonAtoms.Button>
      </NavigationAtoms.TextLink>
      <NavigationAtoms.TextLink to={ '/checkout' }>
        <ButtonAtoms.Button variant='secondary'>Checkout</ButtonAtoms.Button>
      </NavigationAtoms.TextLink>
    </PreviewContainers.Actions>
  </PreviewContainers.Main>
);

export default Preview;

import React from 'react';

import { PreviewContainers } from '../Containers';
import {
  TypeAtoms,
  LayoutAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';
import PreviewItem from '../Molecules/PreviewCard';

const Preview = ({
  cartItems = [],
  user = {},
}) => {
  <PreviewContainers.Main>
    <TypeAtoms.Heading>Cart Preview</TypeAtoms.Heading>
    <LayoutAtoms.List>
      { !!cartItems.length && cartItems.map(cartItem => (
        <PreviewItem
          key={ cartItem.id }
          cartItem={ cartItem }
          product={ cartItem.product }
          user={ user }
        />
      )) }
    </LayoutAtoms.List>
    <PreviewContainers.Actions>
      <NavigationAtoms.NavLink to={ '/cart' }>
        <ButtonAtoms.Button variant='secondary'>Cart</ButtonAtoms.Button>
      </NavigationAtoms.NavLink>
      <NavigationAtoms.NavLink to={ '/checkout' }>
        <ButtonAtoms.Button variant='secondary'>Checkout</ButtonAtoms.Button>
      </NavigationAtoms.NavLink>
    </PreviewContainers.Actions>
  </PreviewContainers.Main>
};

export default Preview;

import React from 'react';

import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';
import { PreviewContainers } from '../Containers';

const Preview = ({
  cardList
}) => (
  <PreviewContainers.Main>
    <TypeAtoms.Heading>Cart Preview</TypeAtoms.Heading>
    { cardList }
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

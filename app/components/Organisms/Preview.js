import React from 'react';

import { PreviewContainers } from '../Containers';
import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';

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

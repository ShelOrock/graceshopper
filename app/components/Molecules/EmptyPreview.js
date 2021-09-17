import React from 'react';

import { PreviewContainers } from '../Containers';
import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';

const EmptyPreview = () => (
  <PreviewContainers.Main>
    <TypeAtoms.Heading>Cart Preview</TypeAtoms.Heading>
    <PreviewContainers.Empty>
      <TypeAtoms.Body>Your shopping cart is empty. Better fix that!</TypeAtoms.Body>
      <NavigationAtoms.TextLink to={ '/shop' }>
        <ButtonAtoms.Button variant='secondary'>Go shopping</ButtonAtoms.Button>
      </NavigationAtoms.TextLink>
    </PreviewContainers.Empty>
  </PreviewContainers.Main>
);

export default EmptyPreview;

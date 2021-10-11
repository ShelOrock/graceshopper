import React from 'react';

import { TypeAtoms, ButtonAtoms } from '../Atoms';
import { PreviewCardContainers } from '../Containers';

const PreviewCard = ({
  cartItem = {},
  product = {},
  removeProductFromCart
}) => (
  <PreviewCardContainers.Main>
    <PreviewCardContainers.Information>
      <TypeAtoms.Heading>{ product.productName }</TypeAtoms.Heading>
      <TypeAtoms.SubHeading>{ product.unitPrice }</TypeAtoms.SubHeading>
      <TypeAtoms.Body>Quantity: { cartItem.quantity }</TypeAtoms.Body>
    </PreviewCardContainers.Information>
    <ButtonAtoms.Button
      onClick={ removeProductFromCart }
      variant='secondary'
    >X</ButtonAtoms.Button>
  </PreviewCardContainers.Main>
);

export default PreviewCard;

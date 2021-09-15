import React from 'react';

import { PreviewCardContainers } from '../Containers';
import { TypeAtoms, ButtonAtoms } from '../Atoms';

import { cartThunks } from '../../redux/thunks';

const PreviewCard = ({
  cartItem = {},
  product = {},
  user = {}
}) => (
  <PreviewCardContainers.Main>
    <PreviewCardContainers.Information>
      <TypeAtoms.Heading>{ product.productName }</TypeAtoms.Heading>
      <TypeAtoms.SubHeading>{ product.unitPrice }</TypeAtoms.SubHeading>
      <TypeAtoms.Body>Quantity: { cartItem.quantity }</TypeAtoms.Body>
    </PreviewCardContainers.Information>
    <ButtonAtoms.DispatchButton
      onClick={ () => cartThunks.removeProductFromCart(
        user.id,
        { cartItemId: cartItem.id }
      ) }
      variant='secondary'
    >X</ButtonAtoms.DispatchButton>
  </PreviewCardContainers.Main>
);

export default PreviewCard;

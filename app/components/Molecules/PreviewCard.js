import React from 'react';

import PreviewListItemContainer from '../Containers/Preview/ListItem';
import InformationContainer from '../Containers/Preview/Information';
import Heading from '../Atoms/Heading';
import SubHeading from '../Atoms/SubHeading';
import Body from '../Atoms/Body';
import DispatchButton from '../Atoms/DispatchButton';

import * as reduxThunks from '../../redux/thunks';
const { cartThunks: { removeProductFromCart } } = reduxThunks;

export default ({
  cartItem = {},
  product = {},
  user = {}
}) => (
  <PreviewListItemContainer>
    <InformationContainer>
      <Heading>{ product.productName }</Heading>
      <SubHeading>{ product.unitPrice }</SubHeading>
      <Body>Quantity: { cartItem.quantity }</Body>
    </InformationContainer>
    <DispatchButton
      onClick={ () => removeProductFromCart(
        user.id,
        { cartItemId: cartItem.id }
      ) }
      variant='secondary'
    >X</DispatchButton>
  </PreviewListItemContainer>
);

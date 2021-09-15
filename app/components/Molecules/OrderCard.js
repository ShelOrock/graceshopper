import * as React from 'react';

import { OrderCardContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  NavigationAtoms
} from '../Atoms';

const OrderCard = ({
  cartItem = {},
  product = {}
}) => (
  <NavigationAtoms.TextLink to={ `/products/${ product.id }` }>
    <OrderCardContainers.Main>
      <OrderCardContainers.Media>
        <MediaAtoms.Image src={ product.productImage } />
      </OrderCardContainers.Media>
        <OrderCardContainers.Content>
          <OrderCardContainers.Header>
            <OrderCardContainers.Information>
              <TypeAtoms.Heading>{ product.productName }</TypeAtoms.Heading>
              <TypeAtoms.SubHeading>${ product.unitPrice }</TypeAtoms.SubHeading>
            </OrderCardContainers.Information>
          </OrderCardContainers.Header>
        <OrderCardContainers.Body>
          <OrderCardContainers.Quantity>
            <TypeAtoms.Body>Quantity: { cartItem.quantity }</TypeAtoms.Body>
          </OrderCardContainers.Quantity>
          <TypeAtoms.Body>Subtotal: ${ (cartItem.quantity * product.unitPrice).toFixed(2) }</TypeAtoms.Body>
        </OrderCardContainers.Body>
      </OrderCardContainers.Content>
    </OrderCardContainers.Main>
  </NavigationAtoms.TextLink>
);

export default OrderCard;

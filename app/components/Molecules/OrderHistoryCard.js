import React from 'react';
import { convertDate } from '../../utils';

import { TypeAtoms, NavigationAtoms } from '../Atoms';
import { OrderHistoryCardContainers } from '../Containers';

const OrderHistoryCard = ({
  order = {},
  cartItemList,
}) => (
  <NavigationAtoms.TextLink to={ `/order-history/${ order.id }` }>
    <OrderHistoryCardContainers.Main>
      <OrderHistoryCardContainers.Header>
        <OrderHistoryCardContainers.Information>
          <TypeAtoms.Heading>Order No. { order.confirmationNumber }</TypeAtoms.Heading>
          <TypeAtoms.Body>{ convertDate(order.createdAt) }</TypeAtoms.Body>
        </OrderHistoryCardContainers.Information>
        <TypeAtoms.Heading>$ { order.total }</TypeAtoms.Heading>
      </OrderHistoryCardContainers.Header>
      { cartItemList }
    </OrderHistoryCardContainers.Main>
  </NavigationAtoms.TextLink >
);

export default OrderHistoryCard;

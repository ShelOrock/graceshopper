import React from 'react';
import { convertDate } from '../../utils';

import { TypeAtoms } from '../Atoms';
import { OrderContainers } from '../Containers';

const Order = ({
  order = {},
  orderItemList = null,
}) => (
  <OrderContainers.Main>
    <OrderContainers.Header>
      <OrderContainers.Content>
        <TypeAtoms.Heading>Order No.{ order.confirmationNumber }</TypeAtoms.Heading>
        <TypeAtoms.Body>{ order.createdAt && convertDate(order.createdAt) }</TypeAtoms.Body>
      </OrderContainers.Content>
      <OrderContainers.Total>
        <TypeAtoms.Heading>Total: ${ order.total }</TypeAtoms.Heading>
      </OrderContainers.Total>
    </OrderContainers.Header>
    <OrderContainers.Body>
      <OrderContainers.Shipping>
        <TypeAtoms.Heading>Shipping Details</TypeAtoms.Heading>
        <TypeAtoms.Body>
          { order.name }<br />
          { order.address }<br />
          { order.city }, { order.state } { order.zip }
        </TypeAtoms.Body>
      </OrderContainers.Shipping>
    </OrderContainers.Body>
    { orderItemList }
  </OrderContainers.Main>
);

export default Order;

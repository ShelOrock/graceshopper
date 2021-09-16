import React from 'react';
import { convertDate } from '../../utils';

import { OrderContainers } from '../Containers';
import { TypeAtoms, LayoutAtoms } from '../Atoms';
import OrderItem from './OrderCard';

const Order = ({
  order = {},
  cartItems = [],
}) => (
  <OrderContainers.Main>
    <OrderContainers.Header>
      <OrderContainers.Information>
        <TypeAtoms.Heading>Order No.{ order.confirmationNumber }</TypeAtoms.Heading>
        <TypeAtoms.Body>{ order.createdAt && convertDate(order.createdAt) }</TypeAtoms.Body>
      </OrderContainers.Information>
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
    <LayoutAtoms.List>
      {
        !!cartItems.length && cartItems.map(cartItem => (
          <OrderItem
            key={ cartItem.id }
            cartItem={ cartItem }
            product={ cartItem.product }
          />
        ))
      }
    </LayoutAtoms.List>
  </OrderContainers.Main>
);

export default Order;

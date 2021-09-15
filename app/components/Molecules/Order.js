import React from 'react';
import { convertDate } from '../../utils';

import OrderContainer from '../Containers/OrderPage/Main';
import HeaderContainer from '../Containers/OrderPage/Header';
import InformationContainer from '../Containers/OrderPage/Content';
import TotalContainer from '../Containers/OrderPage/Total';
import BodyContainer from '../Containers/OrderPage/Body';
import ShippingContainer from '../Containers/OrderPage/Shipping';
import LineList from '../Atoms/Layout/List';
import OrderItem from './OrderCard';
import Heading from '../Atoms/Heading';
import Body from '../Atoms/Body';

export default ({
  order = {},
  cartItems = [],
}) => (
  <OrderContainer>
    <HeaderContainer>
      <InformationContainer>
        <Heading>Order No.{ order.confirmationNumber }</Heading>
        <Body>{ order.createdAt && convertDate(order.createdAt) }</Body>
      </InformationContainer>
      <TotalContainer>
        <Heading>Total: ${ order.total }</Heading>
      </TotalContainer>
    </HeaderContainer>
    <BodyContainer>
      <ShippingContainer>
        <Heading>Shipping Details</Heading>
        <Body>
          { order.name }<br />
          { order.address }<br />
          { order.city }, { order.state } { order.zip }
        </Body>
      </ShippingContainer>
    </BodyContainer>
    <LineList>
      {
        !!cartItems.length && cartItems.map(cartItem => (
          <OrderItem
            key={ cartItem.id }
            cartItem={ cartItem }
            product={ cartItem.product }
          />
        ))
      }
    </LineList>
  </OrderContainer>
);

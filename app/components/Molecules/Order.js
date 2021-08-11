import * as React from 'react';
import { convertDate } from '../../utils';

import OrderContainer from '../Containers/Order/Order';
import HeaderContainer from '../Containers/Order/Header';
import InformationContainer from '../Containers/Order/Information';
import TotalContainer from '../Containers/Order/Total';
import BodyContainer from '../Containers/Order/Body';
import ShippingContainer from '../Containers/Order/Shipping';
import LineList from '../Atoms/LineList';
import OrderItem from './OrderItem';
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

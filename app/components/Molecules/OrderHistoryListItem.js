import * as React from 'react';
import { convertDate } from '../../utils';

import ListItemContainer from '../Containers/OrderHistory/ListItem';
import Header from '../Containers/OrderHistory/Header';
import Information from '../Containers/OrderHistory/Information';
import Link from '../Atoms/Link';
import Heading from '../Atoms/Heading';
import Body from '../Atoms/Body';
import CardList from '../Atoms/CardList';
import Thumbnail from '../Atoms/Thumbnail';

export default ({
  order = {},
  cartItems = [],
}) => (
  <Link to={ `/order-history/${ order.id }` }>
    <ListItemContainer>
      <Header>
        <Information>
          <Heading>Order No. { order.confirmationNumber }</Heading>
          <Body>{ convertDate(order.createdAt) }</Body>
        </Information>
        <Heading>$ { order.total }</Heading>
      </Header>
      <CardList>
        { !!cartItems.length && cartItems.map((cartItem) => (
          <Thumbnail
            key={ cartItem.id }
            src={ cartItem.product.productImage } />
        )) }
      </CardList>
    </ListItemContainer>
  </Link>
);

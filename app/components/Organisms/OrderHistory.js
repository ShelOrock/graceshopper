import * as React from 'react';

import OrderListContainer from '../Containers/OrderHistory/OrderList';
import LineList from '../Atoms/LineList';
import OrderHistoryListItem from '../Molecules/OrderHistoryListItem';

export default ({
  orders = [],
  user = {}
}) => (
  <OrderListContainer>
    <LineList>
      { !!orders.length && orders.map(order => (
        <OrderHistoryListItem
          key={ order.id }
          order={ order }
          cartItems={ order.cartItems }
          user={ user }
        />
      )) }
    </LineList>
  </OrderListContainer>
);

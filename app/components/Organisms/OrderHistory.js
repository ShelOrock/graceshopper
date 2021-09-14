import * as React from 'react';

import LineList from '../Atoms/Layout/List';
import OrderHistoryListItem from '../Molecules/OrderHistoryListItem';

export default ({
  orders = [],
  user = {}
}) => (
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
);

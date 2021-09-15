import React from 'react';

import { LayoutAtoms } from '../Atoms';
import OrderHistoryCard from '../Molecules/OrderHistoryCard';

const OrderHistory = ({
  orders = [],
  user = {}
}) => (
  <LayoutAtoms.List>
    { !!orders.length && orders.map(order => (
      <OrderHistoryCard
        key={ order.id }
        order={ order }
        cartItems={ order.cartItems }
        user={ user }
      />
    )) }
  </LayoutAtoms.List>
);

export default OrderHistory;

import React from 'react';
import { useSelector } from 'react-redux';

import OrderHistoryTemplate from '../Templates/OrderHistory';
import List from '../Organisms/List';
import OrderHistoryCard from '../Molecules/OrderHistoryCard';

const OrderHistoryPage = () => {
  
  const { allOrders, activeUser } = useSelector(state => state);

  return (
    <OrderHistoryTemplate
      title={ 'Order History' }
      orderHistory={ 
        <List
          listData={ allOrders }
          renderData={ orderItem => (
            <OrderHistoryCard
              key={ orderItem.id }
              order={ orderItem }
              cartItems={ orderItem.cartItems }
              user={ activeUser }
            />
          ) }
          orders={ allOrders }
          user={ activeUser }
        />
      }
    />
  );
};

export default OrderHistoryPage;

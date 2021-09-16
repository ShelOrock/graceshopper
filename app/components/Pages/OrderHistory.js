import * as React from 'react';
import { useSelector } from 'react-redux';

import OrderHistoryTemplate from '../Templates/OrderHistory';
import OrderHistory from '../Organisms/OrderHistory';

const OrderHistoryPage = () => {
  
  const { allOrders, activeUser } = useSelector(state => state);

  return (
    <OrderHistoryTemplate
      title={ 'Order History' }
      orderHistory={ 
        <OrderHistory
          orders={ allOrders }
          user={ activeUser }
        />
      }
    />
  );
};

export default OrderHistoryPage;

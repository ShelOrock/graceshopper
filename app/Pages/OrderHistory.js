import * as React from 'react';
import { useSelector } from 'react-redux';

import OrderHistoryTemplate from '../Components/Templates/OrderHistory';
import OrderList from '../Components/Organisms/OrderHistory';

export default () => {
  
  const { allOrders, activeUser } = useSelector(state => state);

  return (
    <OrderHistoryTemplate
      title={ 'Order History' }
      orderHistory={ 
        <OrderList
          orders={ allOrders }
          user={ activeUser }
        />
      }
    />
  );
};

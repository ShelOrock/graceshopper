import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import OrderTemplate from '../Templates/Order';
import Order from '../Molecules/Order';
import BreadCrumbs from '../Molecules/BreadCrumbs';

import { activeOrderThunks } from '../../redux/thunks';

export default () => {

  const { activeOrder } = useSelector(state => state);

  useEffect(() => {
    dispatch(activeOrderThunks.getActiveOrder(orderId));
  }, [orderId])

  return (
    <OrderTemplate
      title={ `Order No.${ activeOrder.confirmationNumber } Details` }
      breadcrumbs={
        <BreadCrumbs
          crumbs={ [   
            { to: '/', name: 'Home' },
            { to: '/order-history', name: 'Order History ' },
            { to: `order-history/${ activeOrder.id }`, name: `Order No. ${ activeOrder.confirmationNumber }`}
          ] }
        />
      }
      order={ 
        <Order
          order={ activeOrder }
          cartItems={ activeOrder.cartItems }
        />
      }
    />
  );
};
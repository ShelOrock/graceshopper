import * as React from 'react';
const { useEffect } = React;
import { useSelector } from 'react-redux';

import OrderTemplate from '../Components/Templates/Order';
import Order from '../Components/Molecules/Order';
import BreadCrumbNavigation from '../Components/Molecules/BreadCrumbNavigation';

import * as reduxThunks from '../redux/thunks';
const { activeOrderThunks: { getActiveOrder } } = reduxThunks;

export default () => {

  const { activeOrder } = useSelector(state => state);

  useEffect(() => {
    dispatch(getActiveOrder(orderId));
  }, [orderId])

  return (
    <OrderTemplate
      title={ `Order No.${ activeOrder.confirmationNumber } Details` }
      breadcrumbs={
        <BreadCrumbNavigation
          firstCrumb={ {
            to: '/',
            name: 'Home',
          } }
          secondCrumb={ {
            to: '/order-history',
            name: 'Order History'
          } }
          thirdCrumb={ {
            to: `order-history/${ activeOrder.id }`,
            name: `Order No. ${ activeOrder.confirmationNumber }`
          } }
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
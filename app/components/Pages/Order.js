import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import OrderTemplate from '../Templates/Order';
import Order from '../Molecules/Order';
import OrderCard from '../Molecules/OrderCard';
import BreadCrumbs from '../Molecules/BreadCrumbs';
import List from '../Organisms/List';

import { activeOrderThunks } from '../../redux/thunks';

export default () => {

  const dispatch = useDispatch();
  const { orderId } = useParams();

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
          orderItemList={ 
            <List
              listData={ activeOrder.cartItems }
              renderData={ cartItem => (
                <OrderCard
                  key={ cartItem.id }
                  cartItem={ cartItem }
                  product={ cartItem.product }
                />
              ) }
            />
          }
        />
      }
    />
  );
};
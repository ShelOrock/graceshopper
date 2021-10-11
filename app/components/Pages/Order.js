import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { OrderTemplate } from '../Templates';
import { List, BreadCrumbs } from '../Organisms';
import {
  Order,
  OrderCard,
  Crumb
} from '../Molecules';

import { activeOrderThunks } from '../../redux/thunks';

const OrderPage = () => {

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
          listData={ [   
            { to: '/', name: 'Home' },
            { to: '/order-history', name: 'Order History ' },
            { to: `/order-history/${ activeOrder.id }`, name: `Order No. ${ activeOrder.confirmationNumber }`}
          ] }
          renderData={ (
            crumb,
            index,
            breadcrumbs
          ) => (
            <Crumb
              key={ crumb.name }
              to={ crumb.to }
              name={ crumb.name }
              lastElement={ index === breadcrumbs.length - 1 }
            />
          ) }
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

export default OrderPage;

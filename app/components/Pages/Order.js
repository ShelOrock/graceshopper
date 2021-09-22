import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { OrderTemplate } from '../Templates';
import { List } from '../Organisms';
import {
  Order,
  OrderCard,
  BreadCrumbs
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
          crumbs={ [   
            { to: '/', name: 'Home' },
            { to: '/order-history', name: 'Order History ' },
            { to: `/order-history/${ activeOrder.id }`, name: `Order No. ${ activeOrder.confirmationNumber }`}
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

export default OrderPage;

import React from 'react';
import { useSelector } from 'react-redux';

import OrderHistoryTemplate from '../Templates/OrderHistory';
import List from '../Organisms/List';
import OrderHistoryCard from '../Molecules/OrderHistoryCard';
import Grid from '../Organisms/Grid';
import { MediaAtoms } from '../Atoms';

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
              cartItemList={
                <Grid
                  listData={ orderItem.cartItems }
                  renderData={ cartItem => (
                    <MediaAtoms.Image
                      key={ cartItem.id }
                      src={ cartItem.product.productImage }
                    />
                  ) }
                />
              }
            />
          ) }
        />
      }
    />
  );
};

export default OrderHistoryPage;

import React from 'react';
import { useSelector } from 'react-redux';

import { OrderHistoryTemplate } from '../Templates';
import { List, Grid } from '../Organisms';
import { OrderHistoryCard } from '../Molecules';
import { MediaAtoms } from '../Atoms';

const OrderHistoryPage = () => {
  
  const { allOrders } = useSelector(state => state);

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

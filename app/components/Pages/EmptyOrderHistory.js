import React from 'react';

import { EmptyTemplate } from '../Templates';
import { EmptyMessage } from '../Molecules';

const EmptyOrderHistoryPage = () => (
  <EmptyTemplate 
    title={ 'Order History' }
    component={
      <EmptyMessage
        heading={ 'No Order History!' }
        message={ 'Your orders are looking non-existent. Let\'s make them existent.' }
        to={ '/shop' }
        name={ 'Go Shopping' }
      />
    }
  />
);

export default EmptyOrderHistoryPage;

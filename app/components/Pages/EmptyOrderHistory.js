import React from 'react';

import EmptyTemplate from '../Templates/Empty';
import EmptyMessage from '../Molecules/EmptyMessage';

export default () => (
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

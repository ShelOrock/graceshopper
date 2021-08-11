import React from 'react';

import EmptyTemplate from '../Components/Templates/Empty';
import EmptyMessage from '../Components/Molecules/EmptyMessage';

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

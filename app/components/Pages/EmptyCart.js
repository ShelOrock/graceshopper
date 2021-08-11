import React from 'react';

import EmptyTemplate from '../Templates/Empty';
import EmptyMessage from '../Molecules/EmptyMessage';

export default () => (
  <EmptyTemplate 
    title={ 'Cart' }
    component={
      <EmptyMessage
        heading={ 'Empty Cart!'}
        message={ 'Nothing is in your cart. Better fix that!' }
        to={ '/shop' }
        name={ 'Go Shopping' }
      />
    }
  />
);

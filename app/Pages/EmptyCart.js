import React from 'react';

import EmptyTemplate from '../Components/Templates/Empty';
import EmptyMessage from '../Components/Molecules/EmptyMessage';

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

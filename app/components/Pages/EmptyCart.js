import React from 'react';

import { EmptyTemplate } from '../Templates';
import { EmptyMessage } from '../Molecules';

const EmptyCartPage = () => (
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

export default EmptyCartPage;

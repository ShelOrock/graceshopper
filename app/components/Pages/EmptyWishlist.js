import React from 'react';

import EmptyTemplate from '../Templates/Empty';
import EmptyMessage from '../Molecules/EmptyMessage';

export default () => (
  <EmptyTemplate 
    title={ 'Wishlist' }
    component={
      <EmptyMessage
        heading={ 'Empty Wishlist!' }
        message={ 'You do not have any wishes. Sad!' }
        to={ '/shop' }
        name={ 'Go Shopping' }
      />
    }
  />
);

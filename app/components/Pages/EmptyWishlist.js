import React from 'react';

import { EmptyTemplate } from '../Templates';
import { EmptyMessage } from '../Molecules';

const EmptyWishlistPage = () => (
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

export default EmptyWishlistPage;

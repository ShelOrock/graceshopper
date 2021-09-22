import React from 'react';

import { EmptyTemplate } from '../Templates';
import { EmptyMessage } from '../Molecules';

const NotFoundPage = () => (
  <EmptyTemplate
    title={ '404 Not Found' }
    component={
      <EmptyMessage
        header={ 'Oops!' }
        message={ 'This page doesn\'t exist' }
        to={ '/' }
        name={ 'Take me home' }
      />
    }
  />
);

export default NotFoundPage;

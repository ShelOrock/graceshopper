import * as React from 'react';

import EmptyTemplate from '../Templates/Empty';
import EmptyMessage from '../Molecules/EmptyMessage';

export default () => (
  <EmptyTemplate
    title={ '404 Not Found' }
    component={
    <EmptyMessage
      header={ 'Oops!' }
      message={ 'This page doesn\'t exist' }
      to={ '/' }
      name={ 'Take me home' }
    /> }
  />
);

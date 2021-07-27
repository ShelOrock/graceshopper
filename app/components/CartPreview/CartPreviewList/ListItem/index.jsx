import * as React from 'react';

import ListItemContainer from './ListItemContainer.jsx';
import Information from './Information/index.jsx';
import ProductName from './Information/ProductName.jsx';
import UnitPrice from './Information/UnitPrice.jsx';
import Quantity from './Information/Quantity.jsx';
import RemoveButton from './RemoveButton.jsx';

export default (cartItem) => (
  <ListItemContainer>
    <Information>
      <ProductName { ...cartItem } />
      <UnitPrice { ...cartItem } />
      <Quantity { ...cartItem } />
    </Information>
    <RemoveButton { ...cartItem } />
  </ListItemContainer>
);

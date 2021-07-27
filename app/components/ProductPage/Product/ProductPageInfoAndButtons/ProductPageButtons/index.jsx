import * as React from 'react';

import AddToCartButton from './AddToCartButton.jsx';

export default (product) => (
  <>
    <AddToCartButton { ...product } />
  </>
)
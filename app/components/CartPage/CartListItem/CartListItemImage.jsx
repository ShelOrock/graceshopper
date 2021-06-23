import * as React from 'react';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledProductCard: { ProductThumbnail } } = StyledComponents;

export default (cartItem) => <ProductThumbnail src={ cartItem.productImage } />;
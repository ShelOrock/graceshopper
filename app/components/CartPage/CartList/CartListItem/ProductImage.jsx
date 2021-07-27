import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledProductCard: { ProductThumbnail } } = StyledComponents;

export default ({ product }) => <ProductThumbnail src={ product.productImage } />;
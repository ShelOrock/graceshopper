import * as React from 'react';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledProductCard: { ProductCardImage } } = StyledComponents;

export default ({ product }) => <ProductCardImage product={ product } />;

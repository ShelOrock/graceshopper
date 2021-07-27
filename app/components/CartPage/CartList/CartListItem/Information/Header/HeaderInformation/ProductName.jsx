import * as React from 'react';

import * as StyledComponents from '../../../../../../StyledComponents/index.jsx';
const { StyledNavigation: { TextLink } } = StyledComponents;

export default ({ product }) => <TextLink to={ `/products/${ product.id }` }>{ product.productName }</TextLink>;

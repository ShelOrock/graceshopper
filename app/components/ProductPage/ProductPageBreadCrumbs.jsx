import * as React from 'react';

import * as StyledComponents from '../StyledComponents/index.jsx';
const { StyledNavigation: { BreadCrumbContainer, BreadCrumb } } = StyledComponents;

export default ({ product }) => (
  <BreadCrumbContainer>
    <BreadCrumb to='/'>Home</BreadCrumb>
    { '>' }
    <BreadCrumb to='/shop'>Shop</BreadCrumb>
    { '>' }
    <BreadCrumb to={ `/products/${ product.id }` }>{ product.productName }</BreadCrumb>
  </BreadCrumbContainer>
);

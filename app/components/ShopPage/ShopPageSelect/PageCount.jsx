import * as React from 'react';
import { useSelector } from 'react-redux';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledShopPage: { PaginateBody } } = StyledComponents;

export default ({ page }) => {

  const { allProducts } = useSelector(state => state);

  return <PaginateBody>{ page + 1 } of { allProducts.count % 4 }</PaginateBody>;
};

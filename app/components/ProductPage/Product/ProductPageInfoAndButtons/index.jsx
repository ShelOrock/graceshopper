import * as React from 'react';
const { useState } = React;

import ProductPageInfo from './ProductPageInfo/index.jsx';
import ProductPageQuantity from './ProductPageQuantity/index.jsx';
import ProductPageButtons from './ProductPageButtons/index.jsx';
import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledProductPage: { ProductInfoAndButtonsContainer } } = StyledComponents;

export default (product) => {

  const [ quantityToAdd, setQuantityToAdd ] = useState(1);

  const productProps = {
    ...product,
    quantityToAdd,
    setQuantityToAdd
  };

  return (
    <ProductInfoAndButtonsContainer>
      <ProductPageInfo { ...product }/>
      <ProductPageQuantity { ...productProps } />
      <ProductPageButtons { ...productProps } />
    </ProductInfoAndButtonsContainer>
  );
};

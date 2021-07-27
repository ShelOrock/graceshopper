import * as React from 'react';

import DecrementButton from './DecrementButton.jsx';
import Quantity from './Quantity.jsx'
import IncrementButton from './IncrementButton.jsx';
import * as StyledComponents from '../../../../StyledComponents/index.jsx';
const { StyledProductPage: { QuantityButtonsContainer } } = StyledComponents;

export default (productProps) => (
  <QuantityButtonsContainer>
    <DecrementButton { ...productProps } />
    <Quantity { ...productProps } />
    <IncrementButton { ...productProps } />
  </QuantityButtonsContainer>
);

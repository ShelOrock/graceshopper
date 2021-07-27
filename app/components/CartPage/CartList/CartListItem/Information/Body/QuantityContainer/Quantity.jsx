import * as React from 'react';

import * as StyledComponents from '../../../../../../StyledComponents/index.jsx';
const { StyledCartPage: { QuantityBody } } = StyledComponents;

export default ({ quantity }) => <QuantityBody>{ quantity }</QuantityBody>;

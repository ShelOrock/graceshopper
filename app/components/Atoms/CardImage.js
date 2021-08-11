import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledProductCard: { StyledCardImage } } = StyledComponents;

export default ({ src }) => <StyledCardImage src={ src } />;

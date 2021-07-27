import * as React from 'react';

import * as StyledComponents from '../StyledComponents/index.jsx';
const { StyledCartPreview: { CartPreviewContainer } } = StyledComponents;

export default ({ children }) => <CartPreviewContainer>{ children }</CartPreviewContainer>;

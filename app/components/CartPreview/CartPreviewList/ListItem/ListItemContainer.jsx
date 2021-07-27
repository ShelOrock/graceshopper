import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledCartPreview: { CartPreviewListItemContainer } } = StyledComponents;

export default ({ children }) => <CartPreviewListItemContainer>{ children }</CartPreviewListItemContainer>;

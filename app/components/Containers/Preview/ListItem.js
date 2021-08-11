import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledCartPreview: { StyledPreviewListItem } } = StyledComponents;

export default ({ children }) => <StyledPreviewListItem>{ children }</StyledPreviewListItem>;

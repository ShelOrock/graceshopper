import * as React from 'react';

import * as StyledComponents from '../StyledComponents/index.js';
const { StyledImage: { StyledThumbnail } } = StyledComponents;

export default ({ src }) => <StyledThumbnail src={ src } />;

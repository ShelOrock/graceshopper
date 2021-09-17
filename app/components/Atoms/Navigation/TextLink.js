import React from 'react';

import { StyledNavigation } from '../../StyledComponents';

const TextLink = ({ to, children }) => <StyledNavigation.TextLink to={ to }>{ children }</StyledNavigation.TextLink>;

export default TextLink;

import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledNavigation: { TextLink } } = StyledComponents;

export default ({ linkLocation, children }) => <TextLink to={ linkLocation }>{ children }</TextLink>;

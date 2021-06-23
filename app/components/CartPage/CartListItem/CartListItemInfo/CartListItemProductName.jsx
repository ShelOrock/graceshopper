import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledNav: { TextLink } } = StyledComponents;

export default (cartItem) => <TextLink to={ `/products/${ cartItem.id }` }>{ cartItem.name }</TextLink>;

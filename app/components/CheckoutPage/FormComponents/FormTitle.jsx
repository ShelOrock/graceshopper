import * as React from 'react';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledForm: { FormTitle } } = StyledComponents;

export default ({ children }) => <FormTitle>{ children }</FormTitle>;
import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledForm: { InputModule, InputLabel } } = StyledComponents;

export default ({ children, name }) => (
  <InputModule>
    <InputLabel>{ name }</InputLabel>
    { children }
  </InputModule>
);

import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledForm: { StyledInput } } = StyledComponents;

export default ({
  type,
  name,
  value,
  onChange,
}) => (
  <StyledInput
    type={ type }
    name={ name }
    value={ value }
    onChange={ (e) => onChange(e) }
  />
);

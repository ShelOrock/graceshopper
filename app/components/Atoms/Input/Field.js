import React from 'react';

import { StyledInput } from '../../StyledComponents';

const Field = ({
  type,
  name,
  value,
  onChange,
}) => (
  <StyledInput.Field
    type={ type }
    name={ name }
    value={ value }
    onChange={ (e) => onChange(e) }
  />
);

export default Field;

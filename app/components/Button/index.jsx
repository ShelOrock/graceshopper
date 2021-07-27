import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const {
  StyledButton: { Button },
  StyledImage: { Icon }
} = StyledComponents;

export default ({
  dispatch = false,
  disabled = false,
  onClick,
  children
}) => (
  <Button>{ children }</Button>
);
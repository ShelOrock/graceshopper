import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

export default ({
  disabled = false,
  onClick,
  variant,
  children
}) => (
  <Button
    disabled={ disabled }
    onClick={ onClick }
    variant={ variant }
  >
    { children }
  </Button>
);
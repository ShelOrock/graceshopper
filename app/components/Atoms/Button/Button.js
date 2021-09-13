import React from 'react';

import { StyledButton } from '../../StyledComponents';

const Button = ({
  disabled = false,
  onClick,
  variant,
  children
}) => (
  <StyledButton.Button
    disabled={ disabled }
    onClick={ onClick }
    variant={ variant }
  >
    { children }
  </StyledButton.Button>
);

export default Button;

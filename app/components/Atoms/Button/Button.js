import React from 'react';

import { StyledButton } from '../../StyledComponents';

const Button = ({
  disabled = false,
  dispatch = null,
  onClick,
  variant,
  children
}) => { console.log(onClick); return (
  <StyledButton.Button
    disabled={ disabled }
    onClick={ () => dispatch ? dispatch(onClick()) : onClick() }
    variant={ variant }
  >
    { children }
  </StyledButton.Button>
)};

export default Button;

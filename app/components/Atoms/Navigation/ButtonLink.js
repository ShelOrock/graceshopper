import React from 'react';

import { StyledNavigation } from '../../StyledComponents';

const ButtonLink = ({
  onClick,
  variant,
  disabled = false,
  children
}) => (
  <StyledNavigation.ButtonLink
    disabled={ disabled }
    onClick={ () => onClick() }
    variant={ variant }
  >
    { children }
  </StyledNavigation.ButtonLink>
);

export default ButtonLink;

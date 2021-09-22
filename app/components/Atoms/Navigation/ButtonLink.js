import React from 'react';

import { StyledNavigation } from '../../StyledComponents';

const ButtonLink = ({
  dispatch = null,
  onClick,
  variant,
  disabled = false,
  children
}) => (
  <StyledNavigation.ButtonLink
    disabled={ disabled }
    onClick={ () => dispatch ? dispatch(onClick) : onClick }
    variant={ variant }
  >
    { children }
  </StyledNavigation.ButtonLink>
);

export default ButtonLink;

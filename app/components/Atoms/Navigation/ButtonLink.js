import React from 'react';
import { useDispatch } from 'react-redux';

import { StyledNavigation } from '../../StyledComponents';

const ButtonLink = ({
  onClick,
  variant,
  disabled = false,
  children
}) => {

  const dispatch = useDispatch();

  return (
    <StyledNavigation.ButtonLink
      disabled={ disabled }
      onClick={ () => dispatch(onClick()) }
      variant={ variant }
    >
      { children }
    </StyledNavigation.ButtonLink>
  );
};

export default ButtonLink;

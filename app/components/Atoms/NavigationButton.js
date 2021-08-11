import React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../StyledComponents';
const { StyledNavigation: { StyledNavigationButton } } = StyledComponents;

export default ({
  onClick,
  variant,
  disabled = false,
  children
}) => {

  const dispatch = useDispatch();

  return (
    <StyledNavigationButton
      disabled={ disabled }
      onClick={ () => dispatch(onClick()) }
      variant={ variant }
    >
      { children }
    </StyledNavigationButton>
  );
};

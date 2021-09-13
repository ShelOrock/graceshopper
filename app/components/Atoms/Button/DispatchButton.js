import * as React from 'react';
import { useDispatch } from 'react-redux';

import { StyledButton } from '../../StyledComponents';

const DispatchButton = ({
  onClick,
  variant,
  disabled = false,
  children
}) => {

  const dispatch = useDispatch();

  return (
    <StyledButton.Button
      disabled={ disabled }
      onClick={ () => dispatch(onClick()) }
      variant={ variant }
    >
      { children }
    </StyledButton.Button>
  );
};

export default DispatchButton;

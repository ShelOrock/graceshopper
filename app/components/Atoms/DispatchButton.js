import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

export default ({
  onClick,
  variant,
  disabled = false,
  children
}) => {

  const dispatch = useDispatch();

  return (
    <Button
      disabled={ disabled }
      onClick={ () => dispatch(onClick()) }
      variant={ variant }
    >
      { children }
    </Button>
  )
}
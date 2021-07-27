import * as React from 'react';

import Minus from '/public/img/minus-white.png';
import * as StyledComponents from '../../../../StyledComponents/index.jsx';
const {
  StyledButton: { SmallButton },
  StyledImage: { Icon }
} = StyledComponents;

export default (productProps) => {

    const handleOnClick = () => {
    productProps.setQuantityToAdd(productProps.quantityToAdd - 1);
  };

  const buttonProps = {
    disabled: productProps.quantityToAdd - 1 <= 0,
    onClick: handleOnClick
  };

  return (
    <SmallButton { ...buttonProps } >
      <Icon src={ Minus } alt='Minus' />
    </SmallButton>
  );
};

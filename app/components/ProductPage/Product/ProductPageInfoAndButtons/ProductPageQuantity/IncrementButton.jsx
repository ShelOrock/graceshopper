import * as React from 'react';

import Plus from '/public/img/plus-white.png';
import * as StyledComponents from '../../../../StyledComponents/index.jsx';
const {
  StyledButton: { SmallButton },
  StyledImage: { Icon }
} = StyledComponents;

export default (productProps) => {

  const handleOnClick = () => {
    productProps.setQuantityToAdd(productProps.quantityToAdd + 1);
  };

  const buttonProps = {
    disabled: productProps.quantity + 1 > productProps.product.inventory,
    onClick: handleOnClick
  };

  return (
    <SmallButton { ...buttonProps } >
      <Icon src={ Plus } alt='Plus' />
    </SmallButton>
  );
};

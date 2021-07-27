import * as React from 'react';

import Cart from '../../../../../../public/img/cart-white.png';
import * as StyledComponents from '../../../../StyledComponents';
const {
  StyledDiv: { Row },
  StyledButton: { ButtonText },
  StyledImage: { Icon },
} = StyledComponents;

export default () => (
  <Row alignItems='center'>
    <ButtonText variant='secondary'>Add to cart</ButtonText>
    <Icon src={ Cart } alt='Cart' />
  </Row>
);

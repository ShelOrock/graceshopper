import React from 'react';

import { InputModuleContainers } from '../Containers';
import { InputAtoms, StripeAtoms } from '../Atoms';

const CardNumber = () => (
  <InputModuleContainers.Module>
    <InputModuleContainers.Information>
      <InputAtoms.Label>Card Number</InputAtoms.Label>
    </InputModuleContainers.Information>
    <StripeAtoms.CardNumber />
  </InputModuleContainers.Module>
);

export default CardNumber;

import React from 'react';

import { InputModuleContainers } from '../Containers';
import { InputAtoms, StripeAtoms } from '../Atoms';

const SecurityCode = () => (
  <InputModuleContainers.Module>
    <InputModuleContainers.Information>
      <InputAtoms.Label>Security Code</InputAtoms.Label>
    </InputModuleContainers.Information>
    <StripeAtoms.SecurityCode />
  </InputModuleContainers.Module>
);

export default SecurityCode;

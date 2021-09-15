import React from 'react';

import { InputModuleContainers } from '../Containers';
import { InputAtoms, StripeAtoms } from '../Atoms';

const Expiration = () => (
  <InputModuleContainers.Module>
    <InputModuleContainers.Information>
      <InputAtoms.Label>Expiration</InputAtoms.Label>
    </InputModuleContainers.Information>
    <StripeAtoms.Expiration />
  </InputModuleContainers.Module>
);

export default Expiration;

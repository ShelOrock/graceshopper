import * as React from 'react';

import InputModule from '../Containers/Form/InputModule';
import InformationContainer from '../Containers/Form/Information';
import Label from '../Atoms/Label';
import CardNumber from '../Atoms/CardNumber';

export default () => (
  <InputModule>
    <InformationContainer>
      <Label>Card Number</Label>
    </InformationContainer>
    <CardNumber />
  </InputModule>
);

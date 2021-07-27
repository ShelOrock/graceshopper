import * as React from 'react';

import FormBodyContainer from '../FormComponents/FormBodyContainer.jsx';
import FormModulesContainer from '../FormComponents/PaymentFormComponents/FormModulesContainer.jsx';
import InputModuleGroupContainer from '../FormComponents/PaymentFormComponents/InputModuleGroupContainer.jsx';
import InputModule from '../../FormInputModules/InputModule.jsx';
import CardNumberModule from './CardNumberModule.jsx';
import SecurityCodeModule from './SecurityCodeModule.jsx';
import ExpirationModule from './ExpirationModule.jsx';

export default () => (
  <FormBodyContainer>
    <FormModulesContainer>
      <InputModule component={ <CardNumberModule /> } name='card number' />
      <InputModuleGroupContainer>
        <InputModule component={ <SecurityCodeModule /> } name='security code' />
        <InputModule component={ <ExpirationModule /> } name='expiration data' />
      </InputModuleGroupContainer>
    </FormModulesContainer>
  </FormBodyContainer>
);

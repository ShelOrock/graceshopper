import * as React from 'react';

import FormModule from './InputModule.jsx';
import * as StyledComponents from '../StyledComponents/index.jsx';
const { StyledForm: { FormModulesContainer } } = StyledComponents;

export default (moduleProps) => {

  const generateInputModules = () => {
    return Object.keys(moduleProps.formState).map((key, idx) => {
      if(key !== 'errors') {

        let inputModuleProps = {
          name: key,
          value: moduleProps.formState[key],
          type: key == 'password' ? 'password' : 'text',
          error: moduleProps.formState.errors && moduleProps.formState.errors[key],
          onChange: moduleProps.onChange,
          validateField: moduleProps.validateField 
        };

        return <FormModule key={ idx } { ...inputModuleProps }/>;
      };
    });
  };

  return (
    <FormModulesContainer>
      { generateInputModules() }
    </FormModulesContainer>
  );
};

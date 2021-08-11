import * as React from 'react';

import BreadCrumbNavigationContainer from '../Containers/BreadCrumbNavigation';
import BreadCrumb from '../Atoms/BreadCrumb';
import Body from '../Atoms/Body';

export default ({
  firstCrumb,
  secondCrumb,
  thirdCrumb
}) => (
  <BreadCrumbNavigationContainer>
    <BreadCrumb to={ firstCrumb.to }>{ firstCrumb.name }</BreadCrumb>
    <Body>{ '>' }</Body>
    <BreadCrumb to={ secondCrumb.to }>{ secondCrumb.name }</BreadCrumb>
    <Body>{ '>' }</Body>
    <BreadCrumb to={ thirdCrumb.to }>{ thirdCrumb.name }</BreadCrumb>
  </BreadCrumbNavigationContainer>
);

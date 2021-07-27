import * as React from 'react';

import PaginateLeftButton from './DecrementPageButton';
import PageCount from './PageCount';
import PaginateRightButton from './IncrementPageButton';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledPageSelect: { PageSelectContainer } } = StyledComponents;

export default ({ page, setPage }) => {
  
  const paginateButtonProps = {
    page,
    setPage
  };

  return (
    <PageSelectContainer>
      <PaginateLeftButton { ...paginateButtonProps } />
      <PageCount { ...paginateButtonProps } />
      <PaginateRightButton { ...paginateButtonProps } />
    </PageSelectContainer>
  );
};

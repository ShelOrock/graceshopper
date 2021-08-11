import * as React from 'react';
import Left from '/public/img/left.png';
import Right from '/public/img/right.png';

import PageSelectContainer from '../Containers/PageSelect';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import SmallBody from '../Atoms/SmallBody';

export default ({
  page,
  setPage,
  allProducts
}) => (
  <PageSelectContainer>
    <Button
      onClick={ () => setPage(page - 1) }
      disabled={ page <= 0 }
      variant='secondary'
    >
      <Icon src={ Left } />
    </Button>
    <SmallBody>{ page + 1 } of { Math.ceil(allProducts.count / 4) }</SmallBody>
    <Button
      onClick={ () => setPage(page + 1) }
      disabled={ allProducts.count <= (page + 1) * 4 }
      variant='secondary'
    >
      <Icon src={ Right } />
    </Button>
  </PageSelectContainer>
);

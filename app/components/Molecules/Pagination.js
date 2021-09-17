import React from 'react';

import Left from '/public/img/left.png';
import Right from '/public/img/right.png';
import { PaginationContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms
} from '../Atoms';

const Pagination = ({
  page,
  setPage,
  allProducts
}) => (
  <PaginationContainers.Main>
    <ButtonAtoms.Button
      onClick={ () => setPage(page - 1) }
      disabled={ page <= 0 }
      variant='secondary'
    >
      <MediaAtoms.Icon src={ Left } />
    </ButtonAtoms.Button>
    <PaginationContainers.Body>
      <TypeAtoms.Body>{ page + 1 } of { Math.ceil(allProducts.count / 4) }</TypeAtoms.Body>
    </PaginationContainers.Body>
    <ButtonAtoms.Button
      onClick={ () => setPage(page + 1) }
      disabled={ allProducts.count <= (page + 1) * 4 }
      variant='secondary'
    >
      <MediaAtoms.Icon src={ Right } />
    </ButtonAtoms.Button>
  </PaginationContainers.Main>
);

export default Pagination;

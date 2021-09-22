import React from 'react';

import LeftIcon from '/public/img/left.png';
import RightIcon from '/public/img/right.png';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms
} from '../Atoms';
import { PaginationContainers } from '../Containers';

const Pagination = ({
  page,
  decrementPage,
  incrementPage,
  allProducts
}) => (
  <PaginationContainers.Main>
    <ButtonAtoms.Button
      onClick={ decrementPage }
      disabled={ page <= 0 }
      variant='secondary'
    >
      <MediaAtoms.Icon src={ LeftIcon } />
    </ButtonAtoms.Button>
    <PaginationContainers.Body>
      <TypeAtoms.Body>{ page + 1 } of { Math.ceil(allProducts.count / 4) }</TypeAtoms.Body>
    </PaginationContainers.Body>
    <ButtonAtoms.Button
      onClick={ incrementPage }
      disabled={ allProducts.count <= (page + 1) * 4 }
      variant='secondary'
    >
      <MediaAtoms.Icon src={ RightIcon } />
    </ButtonAtoms.Button>
  </PaginationContainers.Main>
);

export default Pagination;

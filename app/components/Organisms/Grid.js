import React from 'react';

import { LayoutAtoms } from '../Atoms';

const Grid = ({
  listData = [],
  renderData,
}) => <LayoutAtoms.Grid>{ !!listData.length && listData.map(listItem => renderData(listItem)) }</LayoutAtoms.Grid>;

export default Grid;

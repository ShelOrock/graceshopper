import React from 'react';

import { LayoutAtoms } from '../Atoms';

const List = ({
  listData = [],
  renderData
}) => <LayoutAtoms.List>{ !!listData.length && listData.map(listItem => renderData(listItem)) }</LayoutAtoms.List>;

export default List;

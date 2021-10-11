import React from 'react';

import { BreadCrumbsContainers } from '../Containers';

const BreadCrumbs = ({
  listData = [],
  renderData
}) => (
  <BreadCrumbsContainers.Main>
    {
      !!listData.length && (
      listData.map((
        listItem,
        index,
        listData
      ) => renderData(listItem, index, listData)))
    }
  </BreadCrumbsContainers.Main>
);

export default BreadCrumbs
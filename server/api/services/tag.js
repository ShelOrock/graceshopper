import Sequelize from 'sequelize';
const { Op } = Sequelize;

import { Tag, Product } from '../../db/index.js';

export const getPopularTags = async () => {

  try {
    const tags = await Tag.findAll({
      where: { name: 'popular' },
      include: [{ model: Product }]
    });

    return tags;

  } catch(e) {
    new Error('Error getting popular tags');
  };
};

export const getLimitedTags = async (tagIdArray) => {
  
  try {
    const tags = await Tag.findAll({
      where: {
        id: { [Op.in]: tagIdArray }
      },
      include: [{ model: Product }]
    })

    return tags;

  } catch(e)  {
    throw Error('Error fetching limited Tags')
  };
};

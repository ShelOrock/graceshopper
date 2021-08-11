import Sequelize from 'sequelize';
const { UUID, UUIDV4 } = Sequelize;

import db from '../database.js';

const WishlistItem = db.define('wishlistItem', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
});
  
export default WishlistItem;
import Sequelize from 'sequelize';
const { UUID, UUIDV4 } = Sequelize;

import db from './../database.js';

const Wishlist = db.define('wishlist', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  }
});

export default Wishlist;

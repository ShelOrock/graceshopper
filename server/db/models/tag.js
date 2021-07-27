import Sequelize from "sequelize";

const {
  UUID,
  UUIDV4,
  STRING
} = Sequelize;

import db from '../database.js';

const Tag = db.define('tag', {
  
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },

  name: {
    type: STRING,
    allowNull: false
  }

});

export default Tag;

import Sequelize from 'sequelize';
const {
  UUID,
  UUIDV4,
  STRING,
  BOOLEAN,
} = Sequelize;

import db from '../database.js';

const User = db.define('user', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  sessionId: {
    type: STRING,
    allowNull: true
  },

  email: {
    type: STRING,
    allowNull: true,
    unique: true,
    validate: {
      customValidator(value) {
        if (value === null && this.userType !== 'Guest') {
          throw new Error('Email address cannot be null unless user type is guest');
        }
      },
      isEmail: {
        arg: true,
        msg: 'Email address must be valid'
      }
    }
  },

  username: {
    type: STRING,
    allowNull: true
  },

  password: {
    type: STRING,
    allowNull: true,
    validate: {
      customValidator(value) {
        if (value === null && this.userType !== 'Guest') {
          throw new Error('Password cannot be null unless user type is guest');
        }
      },
      len: {
        arg: [8, 20]
      }
    }
  },

  userType: {
    type: STRING,
    allowNull: false,
    //may need to update this later depends on how a user chooses his type
    validate: {
      isIn: [
        ['Guest', 'Standard', 'Admin', 'GitHub User']
      ]
    }
  },

  isLoggedIn: {
    type: BOOLEAN,
    defaultValue: false
  },

  githubAccessToken: {
    type: STRING,
  }
}, {
  defaultScope: {
    attributes: { exlucde: ['password'] },
  },
  scopes: {
    withPassword: {
      attributes: { exclude: [] }
    }
  }
});

export default User;

import Sequelize from 'sequelize';

import { User } from '../../db/index.js';

export const getUserByPrimaryKey = async userId => {
  try {
    const user = await User.findByPk(userId);
    return user;

  } catch(e) {
    throw Error('Error getting user by primary key');
  };
};

export const getUserBySession = async sessionId => {
  try {
    const user = await User.findOne({
      where: { sessionId },
      attributes: { exclude: ['password'] }
    });
    return user;

  } catch(e) {
    throw Error('Error getting user by session');
  };
};

export const getUserByCredentials = async email => {
  try {
    const user = User.findOne({
      where: { email },
      attributes: { exclude: ['password'] }
    });
    return user;

  } catch(e) {
    throw Error('Error getting user by credentials');
  };
};

export const getUserWithPasswordByCredentials = async email => {
  try {
    const user = User.scope('withPassword').findOne({
      where: { email }
    });
    return user;

    } catch(e) {
      throw Error('Error getting user with password by credentials');
  };
};

export const createStandardUser = async payload => {
  try {
    const user = await User.create(payload);
    return user;

  } catch(e) {
    throw Error(e, 'Error creating user');
  };
};

export const getGuestByPrimaryKey = async userId => {
  try {
    const user = await User.findOne({
      where: Sequelize.and(
        { id: userId },
        { userType: 'Guest' }
      )
    });
    return user;

  } catch(e) {
    throw Error('Error getting guest by primary key');
  };
};

export const getAllGuestsBySession = async sessionId => {
  try {
    const users = await User.findAll({
      where: Sequelize.and(
        { sessionId },
        { userType: 'Guest' }
      )
    });
    return users;

  } catch(e) {
    throw Error('Error getting all guests by session');
  };
};

export const createGuest = async sessionId => {
  try {
    const user = await User.create({
      userType: 'Guest',
      sessionId
    });
    return user;

  } catch(e) {
    throw Error('Error creating guest');
  };
};

export const logUserIn = async (user, payload) => {
  try {
    const updatedUser = await user.update({
      isLoggedIn: true,
      ...payload
    });
    return updatedUser;

  } catch(e) {
    throw Error('Error logging in user');
  };
};

export const logUserOut = async user => {
  try {
    user.update({
      isLoggedIn: false,
      sessionId: null
    });

  } catch(e) {
    throw Error('Error logging out user');
  };
};

export const destroyGuest = async user => {
  try {
    await user.destroy();

  } catch(e) {
    throw Error(e, 'Error destroying guest');
  }
}

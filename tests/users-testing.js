import chai, { expect } from 'chai';
import chaiThings from 'chai-things';
import agent from 'supertest';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import app from '../server/index.js';

import { User } from '../server/db/index.js';

import { Login } from '../app/components/Login.jsx';
import { Button } from '../app/components/StyledComponents/Button.jsx';

chai.use(chaiThings);

agent(app);

enzyme.configure({ adapter: new Adapter() });

// 

// When run a test: npm test -- tests/users-testing.js

//TO DO: write tests about frontend or backend if necessary

describe('User Model', () => {
  describe('Validations', () => {
    let user;
    before(() => {
      user = User.build();
    });

    it('requires `userType`', async () => {
      try {
        await user.userType.validate();
        throw Error(
          'validation was successful but should have failed without `userType`'
        );
      } catch (err) {
        expect(err.message).to.contain('userType');
      }
    });
  });
});

describe('User Routes', () => {
  let storedUsers;

  const userData = [
    {
      id: '07a5ac20-2275-4392-b6c9-0e5bd21a0166',
      userType: 'Guest'
    },
    {
      id: '9df5c385-56ce-4159-8614-af919bd5771a',
      userType: 'Admin'
    }
  ];

  beforeEach(async () => {
    await User.destroy({ where: {}, force: true });
    const createdUsers = await User.bulkCreate(userData);
    storedUsers = createdUsers.map(user => user.dataValues);
  });

  xdescribe('GET `/api/users`', () => {
    it('should get all users', async () => {
      const response = await agent.get('/api/users').expect(200);
      // console.log(response.body)
      expect(response.body.count).to.equal(2);
      expect(response.body.rows[1].userType).to.equal(
        storedUsers[1].userType
      );
    });
  });
});

describe('Login Component render', () => {
  xit('should have a button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(Button)).to.have.length(1);
  });
});

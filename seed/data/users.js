import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

const users = [
  {
    email: 'orockshel@gmail.com',
    username: 'shelorock',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    userType: 'Admin'
  },
  {
    email: 'spongebob@gmail.com',
    username: 'spongebob',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    userType: 'Admin'
  },
  {
    email: 'squidward@gmail.com',
    username: 'squidward',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    userType: 'Standard'
  },
  {
    email: 'patrick@gmail.com',
    username: 'patrickstar',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    userType: 'Standard'
  }
];

export default users;
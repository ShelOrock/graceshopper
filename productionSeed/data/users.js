import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

const users = [
  {
    email: 'orockshel@gmail.com',
    username: 'shelorock',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    userType: 'Admin'
  }
]

export default users;
import jwt, { SignOptions } from 'jsonwebtoken';
import { Login } from '../interfaces/login';
import { User } from '../interfaces/users';
import loginModel from '../models/login';

const JWT_SECRET = process.env.JWT_SECRET || 'batatinha';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const generateToken = (payload: User) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const userLogin = async (login: Login) => {
  const users = await loginModel.userLogin(login);
  if (users[0].username !== login.username || users[0].password !== login.password) {
    return { type: 401, message: 'Username or password invalid' };
  }
  return generateToken(users[0]);
};

export default {
  userLogin,
};
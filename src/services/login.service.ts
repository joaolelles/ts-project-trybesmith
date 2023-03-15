import jwt, { SignOptions } from 'jsonwebtoken';
import { Login } from '../interfaces/login';
import loginModel from '../models/login.model';

const JWT_SECRET = process.env.JWT_SECRET || 'batatinha';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const generateToken = (payload: Login) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const userLogin = async (login: Login): Promise<boolean | string> => {
  const users = await loginModel.userLogin(login);
  if (users.length === 0 || users[0].password !== login.password) {
    return false;
  }
  return generateToken(login);
};

export default {
  userLogin,
};
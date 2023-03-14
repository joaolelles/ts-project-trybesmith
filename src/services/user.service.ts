import jwt, { SignOptions } from 'jsonwebtoken';
import userModel from '../models/user.model';
import { User } from '../interfaces/users';

const JWT_SECRET = process.env.JWT_SECRET || 'batatinha';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const generateToken = (payload: User) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const registerUser = async (user: User): Promise<string> => {
  const token = await generateToken(user);
  userModel.registerUser(user);
  return token;
};

export default {
  registerUser,
};
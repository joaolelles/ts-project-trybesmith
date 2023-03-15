import { Request, Response } from 'express';
import loginService from '../services/login.service';

const userLogin = async (req: Request, res: Response) => {
  const token = await loginService.userLogin(req.body);
  if (!token) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(200).json({ token });
};

export default {
  userLogin,
};
import { Request, Response } from 'express';
import loginService from '../services/login.service';

const userLogin = async (req: Request, res: Response) => {
  const token = await loginService.userLogin(req.body);
  return res.status(200).json({ token });
};

export default {
  userLogin,
};
import { Request, Response } from 'express';
import userService from '../services/user.service';

const registerUser = async (req: Request, res: Response) => {
  const token = await userService.registerUser(req.body);
  return res.status(201).json({ token });
};

export default {
  registerUser,
};
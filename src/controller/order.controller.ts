import { Request, Response } from 'express';
import orderService from '../services/order.service';
import userService from '../services/user.service';

const getAll = async (_req: Request, res: Response) => {
  const allOrder = await orderService.getAll();
  return res.status(200).json(allOrder);
};

const registerOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { user } = req.body;
  const userName = await userService.getId(user.username);
  const result = {
    userId: userName.id,
    productsIds,
  };
  await orderService.registerOrder(userName.id, productsIds);
  return res.status(201).json(result);
};

export default {
  getAll,
  registerOrder,
};
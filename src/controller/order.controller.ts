import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAll = async (_req: Request, res: Response) => {
  const allOrder = await orderService.getAll();
  return res.status(200).json(allOrder);
};

const registerOrder = async (req: Request, res: Response) => {
  const { payload } = req.body.user;
  // const order = await orderService.registerOrder(req.body);
  const userId = payload.id;
  console.log(userId);
  
  return res.status(201).json({ userId });
};

export default {
  getAll,
  registerOrder,
};
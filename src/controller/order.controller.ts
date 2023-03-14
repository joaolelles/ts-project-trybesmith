import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAll = async (_req: Request, res: Response) => {
  const allOrder = await orderService.getAll();
  return res.status(200).json(allOrder);
};

export default {
  getAll,
};
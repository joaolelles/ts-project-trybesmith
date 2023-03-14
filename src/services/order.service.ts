import orderModel from '../models/order.model';
import { Order } from '../interfaces/order';

const getAll = async (): Promise<Order[]> => {
  const result = await orderModel.getAll();
  return result;
};

export default {
  getAll,
};
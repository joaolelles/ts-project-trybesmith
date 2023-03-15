import orderModel from '../models/order.model';
import { Order } from '../interfaces/order';
import { OrderP } from '../interfaces/product';

const getAll = async (): Promise<Order[]> => {
  const result = await orderModel.getAll();
  return result;
};

const registerOrder = async (productsIds: number[], orderP: OrderP) => {
  const mapOrderP = productsIds.map((e) => orderModel.registerOrderP(e, orderP));
  // const result = await orderModel.registerOrderP(order, orderP);
  const result = await Promise.all(mapOrderP);
  return result;
};

export default {
  getAll,
  registerOrder,
};
import orderModel from '../models/order.model';
import { Order } from '../interfaces/order';
import productModel from '../models/product.model';

const getAll = async (): Promise<Order[]> => {
  const result = await orderModel.getAll();
  return result;
};

const registerOrder = async (productsIds: number[], userId: number) => {
  const orderId = await orderModel.registerOrder(userId);
  productsIds.forEach((e) => productModel.updateOrderId(orderId, e));
};

export default {
  getAll,
  registerOrder,
};
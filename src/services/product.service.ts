import productModel from '../models/product.model';
import { Product, Order } from '../interfaces/product';

const registerProduct = async (product: Product) => {
  const newProduct = await productModel.registerProduct(product);
  return newProduct;
};

const getAll = async (): Promise<Order[]> => {
  const result = await productModel.getAll();
  return result;
};

export default {
  registerProduct,
  getAll,
};
import productModel from '../models/product.model';
import { Product, OrderP } from '../interfaces/product';

const registerProduct = async (product: Product) => {
  const newProduct = await productModel.registerProduct(product);
  return newProduct;
};

const getAll = async (): Promise<OrderP[]> => {
  const result = await productModel.getAll();
  return result;
};

export default {
  registerProduct,
  getAll,
};
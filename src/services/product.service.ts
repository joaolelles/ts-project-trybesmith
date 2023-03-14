import productModel from '../models/product.model';
import { Product } from '../interfaces/product';

const registerProduct = async (product: Product) => {
  const newProduct = await productModel.registerProduct(product);
  return newProduct;
};

export default {
  registerProduct,
};
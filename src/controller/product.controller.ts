import { Request, Response } from 'express';
import productService from '../services/product.service';

const registerProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.registerProduct(req.body);
  return res.status(201).json(newProduct);
};

const getAll = async (req: Request, res: Response) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

export default {
  registerProduct,
  getAll,
};
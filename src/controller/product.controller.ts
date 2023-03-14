import { Request, Response } from 'express';
import productService from '../services/product.service';

const registerProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.registerProduct(req.body);
  return res.status(201).json(newProduct);
};

export default {
  registerProduct,
};
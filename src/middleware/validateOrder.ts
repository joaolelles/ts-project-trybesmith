import { Request, Response, NextFunction } from 'express';
import { Order } from '../interfaces/order';

const validateProductsIds = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds }:Order = req.body;
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (!productsIds.length) {
    return res.status(422)
      .json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

export default {
  validateProductsIds,
};
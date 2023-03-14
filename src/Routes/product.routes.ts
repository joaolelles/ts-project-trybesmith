import { Router } from 'express';
import productController from '../controller/product.controller';

const router = Router();

router.post('/', productController.registerProduct);

export default router;
import { Router } from 'express';
import productController from '../controller/product.controller';

const router = Router();

router.post('/', productController.registerProduct);
router.get('/', productController.getAll);

export default router;
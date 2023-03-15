import { Router } from 'express';
import productController from '../controller/product.controller';
import validateProduct from '../middleware/validateProduct';

const { validateName, validateAmount } = validateProduct;

const router = Router();

router.post('/', validateName, validateAmount, productController.registerProduct);
router.get('/', productController.getAll);

export default router;
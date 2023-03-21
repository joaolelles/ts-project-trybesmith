import { Router } from 'express';
import orderController from '../controller/order.controller';
import validateToken from '../middleware/validateToken';
import validateOrder from '../middleware/validateOrder';

const { validateProductsIds } = validateOrder;
const { authToken } = validateToken;

const router = Router();

router.get('/', orderController.getAll);
router.post('/', authToken, validateProductsIds, orderController.registerOrder);

export default router;
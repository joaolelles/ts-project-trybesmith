import { Router } from 'express';
import loginController from '../controller/login.controller';
import validateLogin from '../middleware/validateLogin';

const router = Router();

router.post('/', validateLogin.validateFieldsLogin, loginController.userLogin);

export default router;
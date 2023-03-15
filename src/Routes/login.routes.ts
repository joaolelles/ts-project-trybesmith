import { Router } from 'express';
import loginController from '../controller/login.controller';
import validateLogin from '../middleware/validateLogin';

const { validateFieldsLogin } = validateLogin;

const router = Router();

router.post('/', validateFieldsLogin, loginController.userLogin);

export default router;
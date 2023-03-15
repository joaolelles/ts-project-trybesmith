import { Router } from 'express';
import userController from '../controller/user.controller';
import validateUser from '../middleware/validateUser';

const { validateUsername, validateVocation, validateLevel, validatePassword } = validateUser;

const router = Router();

router.post(
  '/', 
  validateUsername, 
  validateVocation,
  validateLevel, 
  validatePassword, 
  userController.registerUser,
);

export default router;
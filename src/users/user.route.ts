import { Router } from 'express';
import userController from './user.controller';

const router = Router();

router.post('/', userController.create);
router.post('/login', userController.login);

export default router;

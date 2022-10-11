import {Router} from 'express';
import {createUser, listUser} from '../controllers/userController';

const router = Router();

router.post('/users', createUser);

router.get('/users', listUser);
export default router;
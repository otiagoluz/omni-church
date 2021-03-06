import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.get('/users/:id', UserController.byId);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

export default router;
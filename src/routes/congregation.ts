import { Router } from 'express';
import CongregationController from '../controllers/CongregationController';

const router = Router();

router.post('/', CongregationController.store);
router.get('/', CongregationController.index);
router.get('/:id', CongregationController.byId);
router.put('/:id', CongregationController.update);
router.delete('/:id', CongregationController.delete);

export default router;
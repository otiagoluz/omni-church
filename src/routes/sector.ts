import { Router } from 'express';
import SectorController from '../controllers/SectorController';

const router = Router();

router.post('/', SectorController.store);
router.get('/', SectorController.index);
router.get('/:id', SectorController.byId);
router.put('/:id', SectorController.update);
router.delete('/:id', SectorController.delete);


export default router;
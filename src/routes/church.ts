import { Router } from "express";
import ChurchController from "../controllers/ChurchController";

const router = Router();

router.get('/', ChurchController.index);
router.post('/', ChurchController.store);
router.get('/:id([0-9]+)', ChurchController.byId);
router.patch('/:id([0-9]+)', ChurchController.update);

export default router;
import express from 'express';
import { Request, Response} from 'express'
import  UserMasterController from './controllers/UserMasterController';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json({ hello: "World" });
})

routes.get('/users', UserMasterController.index);
routes.get('/users/:id', UserMasterController.byId);
routes.delete('/users/:id', UserMasterController.delete);
routes.post('/users', UserMasterController.store);

export default routes;
import express from 'express';
import { Request, Response} from 'express'
import ChurchController from './controllers/ChurchController';
import  UserMasterController from './controllers/UserMasterController';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json({ hello: "World" });
})

routes.get('/users', UserMasterController.index);
routes.post('/users', UserMasterController.store);
routes.get('/users/:id', UserMasterController.byId);
routes.put('/users/:id', UserMasterController.update);
routes.delete('/users/:id', UserMasterController.delete);


routes.get('/churches', ChurchController.index);
routes.post('/churches', ChurchController.store);
routes.get('/churches/:id', ChurchController.byId);
routes.put('/churches/:id', ChurchController.update);

export default routes;
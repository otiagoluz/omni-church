import express from 'express';
import { Request, Response} from 'express'
import ChurchController from './controllers/ChurchController';
import SectorController from './controllers/SectorController';
import  UserMasterController from './controllers/UserMasterController';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json({ hello: "World" });
})

// Users
routes.get('/users', UserMasterController.index);
routes.post('/users', UserMasterController.store);
routes.get('/users/:id', UserMasterController.byId);
routes.put('/users/:id', UserMasterController.update);
routes.delete('/users/:id', UserMasterController.delete);

// Churches
routes.get('/churches', ChurchController.index);
routes.post('/churches', ChurchController.store);
routes.get('/churches/:id', ChurchController.byId);
routes.put('/churches/:id', ChurchController.update);

// Sectors
routes.post('/sectors', SectorController.store);
routes.get('/sectors', SectorController.index);
routes.get('/sectors/:id', SectorController.byId);
routes.put('/sectors/:id', SectorController.update);
routes.delete('/sectors/:id', SectorController.delete);


export default routes;
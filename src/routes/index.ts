import { Router } from 'express';
import { Request, Response} from 'express'

import user from './user'
import auth from './auth'

import church from './church';
import sector from './sector';
import congregation from './congregation'

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json({ message: "Welcome to omni-church-api" });
})

routes.use("/user", user);
routes.use("/auth", auth);

routes.use("/churches", church);
routes.use("/sectors", sector);
routes.use("/congregations", congregation);

export default routes;
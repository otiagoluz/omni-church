import { Request, Response } from "express";
import Sector from "../models/Sector";

const SectorController = {
  async store(req: Request, res: Response): Promise<any>{
   const { name, number } = req.body;
   try {
     const sector = await Sector.create({ name, number });
     return res.json(sector);
   } catch (err) {
     console.log(err);
     return res.status(500);
   }
  },

  async index(req: Request, res: Response): Promise<any> {
    const sector = await Sector.findAll();
    return res.json(sector);
   },

  async byId(req: Request, res: Response): Promise<any> {
    const id = req.params?.id;
    const sector = await Sector.findByPk(id);
    return res.json(sector);
  },

  async delete(req: Request, res: Response): Promise<any> {
    const id = req.params?.id;
    const sector = await Sector.destroy({ where: {id} })
    return res.json(sector);
  },

  async update(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params?.id);
    const { name, number } = req.body;
    try {
      await Sector.update({ name, number }, { where: { id }});
      res.json(await Sector.findByPk(id));
    }
    catch (err) { 
      console.log(err);
      return res.status(500).json({ error: err })
    }
  }

}

export default SectorController;




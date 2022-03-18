
import { Request, Response } from "express";
import Address from "../models/Address";
import Congregation from "../models/Congregation";

const CongregationController = {

  async store(req: Request, res: Response): Promise<any>{
   const { name, is_sector_head, sector_id, address } = req.body;
   try {
     const congregation = await Congregation.create({ name, is_sector_head, sector_id, address }, { include: [Address] });
     return res.json(congregation);
   } catch (err) {
     console.log(err);
     return res.status(500);
   }
  },

  async index(req: Request, res: Response): Promise<any> {
    const congregation = await Congregation.findAll({ include: [Address] });
    return res.json(congregation);
   },

  async byId(req: Request, res: Response): Promise<any> {
    const id = req.params?.id;
    const congregation = await Congregation.findByPk(id, { include: [Address] });
    return res.json(congregation);
  },

  async delete(req: Request, res: Response): Promise<any> {
    const id = req.params?.id;
    const congregation = await Congregation.destroy({ where: {id} })
    return res.json(congregation);
  },

  async update(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params?.id);
    const { name, is_sector_head, sector_id, address } = req.body;
    try {
      await Congregation.update({ name, is_sector_head, sector_id }, { where: { id }}).then(() => {
        Congregation.findByPk(id, { include: [Address] }).then((church) => {
          if (church) {
            return church.address.update(address)
          }
        })
      })   
      res.json(await Congregation.findByPk(id, { include: [Address] }))
    }
    catch (err) { 
      console.log(err);
      return res.status(500).json({ error: err })
    }
  }
}

export default CongregationController;
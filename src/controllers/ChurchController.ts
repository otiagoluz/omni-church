import { Request, Response } from "express";
import Address from "../models/Address";
import Church from "../models/Church";

const ChurchController = {
  async store(req: Request, res: Response) {
   const { name, email, cnpj, phone, address } = req.body;
   try {
     const church = await Church.create({ name, email, cnpj, phone, address }, { include: [Address] });
     return res.json(church);
   } catch (err) {
     console.log(err);
     return res.status(500);
   }
  },

  async index(req: Request, res: Response): Promise<any> {
    const churches = await Church.findAll({ include: [Address] });
    return res.json(churches);
   },

  async byId(req: Request, res: Response): Promise<any> {
    const id = req.params?.id;
    const church = await Church.findByPk(id, { include: [Address] });
    return res.json(church);
  },

  async delete(req: Request, res: Response): Promise<any> {
    const id = req.params?.id;
    const church = await Church.destroy({ where: {id} })
    return res.json(church);
  },

  async update(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params?.id);
    const { name, email, cnpj, phone, address } = req.body;
    try {
      await Church.update({ name, email, cnpj, phone }, { where: { id }}).then(() => {
        Church.findByPk(id, { include: [Address] }).then((church) => {
          if (church) {
            return church.address.update(address)
          }
        })
      })   
      res.json(await Church.findByPk(id, { include: [Address] }))
    }

    catch (err) { 
      console.log(err);
      return res.status(500).json({ error: err })
    }
  }

}

export default ChurchController;




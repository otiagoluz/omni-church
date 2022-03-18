import { Request, Response } from "express";
import User from "../models/User";

const UserController = {
  async index(req: Request, res: Response) {
   const users = await User.findAll();
   return res.json(users);
  },

  async store(req: Request, res: Response) {
   const { name, email, password } = req.body;
   const user = await User.create({ name, email, password });
   return res.json(user);
  },

  async byId(req: Request, res: Response) {
    const id = req.params?.id;
    const user = await User.findByPk(id)
    return res.json(user);
  },

  async update(req: Request, res: Response) {
    const id = parseInt(req.params?.id);
    const { name, email, password } = req.body;
    try {
      await User.update({ name, email, password }, { where: { id } })
      return res.json(await User.findByPk(id));
    }
    catch (err) {
      console.log(err);
      return res.status(200).json({ error: err })
    }
  },

  async delete(req: Request, res: Response) {
    const id = req.params?.id;
    const user = await User.destroy({ where: {id}})
    return res.json(user);
  }
}

export default UserController;




import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import User from "../models/User";
import config from "../config/config";
import { validationResult } from "express-validator";

class AuthController {

  static login = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send();
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array);
    }

    await User.findOne({ where: { email } }).then(user => {
      if (!user) return res.status(401).json({ error: "User not found" })

        //Check if encrypted password match
        if (!user.checkIfUnEncryptedPasswordIsValid(password)) {
          res.status(401).json({ error: 'Incorrect Password' });
          return;
        }

        //Sing JWT, valid for 1 hour
        const token = jwt.sign(
          { userId: user.id, username: user.email },
          config.jwtSecret,
          { expiresIn: "1h" }
        );

        res.send(token);

    }).catch(err => res.status(401).json({err}));

  };

  static changePassword = async (req: Request, res: Response) => {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    //Get user from the database
    await User.findByPk(id).then(user => {
      if (!user) return res.status(401).json({ error: "User not found" })

      //Check if old password match
      if (!user.checkIfUnEncryptedPasswordIsValid(oldPassword)) {
        res.status(401).send();
        return;
      }

      //Validate de model (password length)
      user.password = newPassword;
    
      //Hash the new password and save
      user.hashPassword();

      User.update(user, { where: id });

      res.status(204).send();
    });
  };
}
export default AuthController;
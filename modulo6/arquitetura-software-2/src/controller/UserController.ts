import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message)
      }
    }
  }

  getAllUsers = async(req: Request,res: Response): Promise<void> =>{

    try {
       
        const userBusiness = new UserBusiness()
        const user = await userBusiness.getAllUsers()

        res.status(200).send(user)
 
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message)
        }
    }
 };
 
}

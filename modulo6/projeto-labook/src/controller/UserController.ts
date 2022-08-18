import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserIdDTO } from "../model/UserIdDTO";
import { UserInputDTO } from "../model/UserInputDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

  async makeFriendship(req: Request, res: Response):Promise<void> {
    try {
      const { id } = req.body;

      const input: UserIdDTO = {
        id
      }

      const userBusiness = new UserBusiness();
      await userBusiness.makeFriendship(input);

      res.status(201).send({ message: "Amizade realizada com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

  async endFriendship(req: Request, res: Response):Promise<void> {
    try {
        const { id } = req.body;

        const input: UserIdDTO = {
          id
        }  

      const userBusiness = new UserBusiness();
      await userBusiness.endFriendship(input);

      res.status(201).send({ message: "Amizade desfeita com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

}
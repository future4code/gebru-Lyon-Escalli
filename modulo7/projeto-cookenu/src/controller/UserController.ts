import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { idUserInputDTO, LoginUserInputDTO, UserInputDTO } from "../model/user";

export class UserController {
  private userBusiness: UserBusiness
  constructor() {
    this.userBusiness = new UserBusiness()
  }

      public signup = async (req: Request, res: Response) => {
        try {
          
          const input: UserInputDTO = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
          }

          const token = await this.userBusiness.signup(input)
    
          res.status(201).send({ message: "Usuário criado com sucesso!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public login = async (req: Request, res: Response) => {
        try {
          const input: LoginUserInputDTO = {
            email: req.body.email,
            password: req.body.password
          }

          const { token, id } = await this.userBusiness.login(input)
    
          res.status(200).send({ message: "Login efetuado com sucesso!", token, id });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };
      
      public getMyProfile = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string
          const input: idUserInputDTO = {
            id: req.params.id
          }
          
          const result = await this.userBusiness.getMyProfile(input, token)
    
          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public getOtherProfile = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string
          const input: idUserInputDTO = {
            id: req.params.id
          }
          
          const result = await this.userBusiness.getOtherProfile(input, token)
    
          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };
  
}

import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness';

export class UserController {
    
    createUser = async(req: Request,res: Response): Promise<void> =>{

        try {
           
            const input: any = { 
                name: req.body.name, 
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send("Usuário criado com sucesso!")
     
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
        }
     };

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

     deleteUser = async(req: Request,res: Response): Promise<void> =>{

        try {
           
            const input: any = { 
                id: req.params.id
            }

            const userBusiness = new UserBusiness()
            await userBusiness.deleteUser(input)

            res.status(200).send("Usuário deletado com sucesso!")
     
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
        }
     };
     
}
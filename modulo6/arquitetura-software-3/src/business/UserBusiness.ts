import { UserDatabase } from "../data/UserDatabase"
import { MissingParameters } from "../error/customError"
import { gerarNovoId } from "../services/generateId"

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new MissingParameters()
    }

    const id = gerarNovoId

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  getAllUsers = async(): Promise<void> =>{
    try {

        const useDatabase = new UserDatabase()
        await useDatabase.getAllUsers()

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        }
    }
    
 };

}

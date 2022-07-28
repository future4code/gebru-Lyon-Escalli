import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

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

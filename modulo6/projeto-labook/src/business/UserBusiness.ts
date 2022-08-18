import { UserDatabase } from "../data/UserDatabase"
import { MissingParameters } from "../error/error"
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

  async makeFriendship({ id }: any):Promise<void> {
    if (!id) {
      throw new MissingParameters()
    }
    const userDatabase = new UserDatabase()
    await userDatabase.makeFriendship({
      id
    })
  }       

  async endFriendship({ id }: any):Promise<void> {
    if (!id) {
      throw new MissingParameters()
    }
    const userDatabase = new UserDatabase()
    await userDatabase.endFriendship({
      id
    })
  }

}
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  getAllUsers = async() => {
    try {
        await UserDatabase.connection(UserDatabase.TABLE_NAME).select()
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        }
    }
  }

}

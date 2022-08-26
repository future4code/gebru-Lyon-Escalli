import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "cookenu_users";

  public signup = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public login = async (email: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
      .where({email});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public getMyProfile = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
      .where({id});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public getOtherProfile = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
      .where({id});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

}

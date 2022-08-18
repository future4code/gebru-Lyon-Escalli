import { BaseDatabase } from "./BaseDatabase";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

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

  async makeFriendship({ id }: any): Promise<void> {
    await UserDatabase.connection
    .raw(`
    CREATE TABLE IF NOT EXISTS labook_users(
       id VARCHAR(255) PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL
    );
 `)
 .then()
 .catch(printError);
 }

  async endFriendship({ id }: any): Promise<void> {
    await UserDatabase.connection
    .raw(`
    CREATE TABLE IF NOT EXISTS labook_users(
       id VARCHAR(255) PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL
    );
 `)
 .then()
 .catch(printError);
 }

}
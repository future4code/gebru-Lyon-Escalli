import { BaseDatabase } from './BaseDatabase'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

class Migrations extends BaseDatabase {

   private closeConnection = () => { BaseDatabase.connection.destroy() }
   private createTables = () => BaseDatabase.connection
   .raw(`
      CREATE TABLE IF NOT EXISTS cookenu_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL,
         role VARCHAR(64) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS cookenu_recipes (
         id VARCHAR(255) PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         created_at VARCHAR(255) NOT NULL
      );
`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)
   .finally(this.closeConnection)

   public createDB = () => {
      return this.createTables()
   }
   static createDB: any
   
}

const newDatabase = new Migrations;

newDatabase.createDB();
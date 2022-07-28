import { BaseDatabase } from './BaseDatabase'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

class Migration extends BaseDatabase {

   private closeConnection = () => { BaseDatabase.connection.destroy() }
   private createTables = () => BaseDatabase.connection
   .raw(`
    CREATE TABLE IF NOT EXISTS User_Arq (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
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

const newDatabase = new Migration;

newDatabase.createDB();
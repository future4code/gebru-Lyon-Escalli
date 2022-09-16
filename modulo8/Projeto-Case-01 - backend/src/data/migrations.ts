import BaseDatabase from "./BaseDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

class Migrations extends BaseDatabase {

   private closeConnection = () => { BaseDatabase.connection.destroy() }
   private createTables = () => BaseDatabase.connection
   .raw(`
      
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
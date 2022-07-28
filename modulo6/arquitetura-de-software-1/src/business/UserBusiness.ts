import { v4 as uuidv4 } from 'uuid';
import { UserDatabase } from '../data/UserDatabase';

export class UserBusiness {
    createUser = async(input:any): Promise<void> =>{
        try {
            const { name, email, password } = input

            if(!name || !email || !password) {
                throw new Error("Preencha os campos 'name', 'email' e 'password'.")
            }

            const useDatabase = new UserDatabase()
            await useDatabase.insertUser({
                id: uuidv4(),
                name,
                email,
                password
            })

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
     };

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

     deleteUser = async(input:any): Promise<void> =>{
        try {
            const { id } = input

            if(!id ) {
                throw new Error("O id está faltando")
            }

            const useDatabase = new UserDatabase()
            await useDatabase.deleteUser(id)

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
     };
}
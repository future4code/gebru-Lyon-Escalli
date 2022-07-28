import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {
    insertUser = async(user: user) => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
    }

    getAllUsers = async() => {
        try {
            await UserDatabase.connection('User_Arq').select()
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
    }

    deleteUser = async(id: any) => {
        try {
            await UserDatabase.connection('User_Arq').where(`${id} = id`).delete()
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
    }
}
import { AuthenticationData } from "../model/types";
import * as jwt from "jsonwebtoken"

class Authenticator {

    public generateToken = (payload: AuthenticationData) :string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )

        return token
    }

    public getTokenData = (token: string) :AuthenticationData => {
        const result = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData

        return result
    }
}

export default new Authenticator()
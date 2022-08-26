import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidPassword, MissingParameters, NotAuthorized, NotFound } from "../error/customError";
import { AuthenticationData } from "../model/types";
import { idUserInputDTO, LoginUserInputDTO, user, UserInputDTO } from "../model/user";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";


export class UserBusiness {
  private UserDB: UserDatabase
  constructor() {
    this.UserDB =  new UserDatabase()
  }

  public signup = async (input: UserInputDTO) => {
    try {
      let {name, email, password, role} = input

      if (!name || !email || !password || !role) {
        throw new MissingParameters();
      }

      if(role !== "NORMAL" && role !== "ADMIN") {
        role = "NORMAL"
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const id = IdGenerator.generateId()
      const hash = await HashManager.generateHash(password)

      const user: user = {
        id,
        name,
        email,
        password: hash,
        role
      }

      await this.UserDB.signup(user)

      const token = Authenticator.generateToken({id, role})

      return token

    } catch (error: any) {
      throw new CustomError(400, "Descrever erro");
    }
  };

  public login = async (input: LoginUserInputDTO) => {
    try {
      let {email, password} = input

      if (!email || !password) {
        throw new MissingParameters();
      }

      const user = await this.UserDB.login(email)
      const hashCompare = await HashManager.compareHash(
        password,
        user.password
      )

      if (!hashCompare) {
        throw new InvalidPassword();
      }

      const payload: AuthenticationData = {
        id: user.id,
        role: user.role
      }

      const token = Authenticator.generateToken(payload)

      const result = {
        token: token,
        id: user.id
      }

      return result

    } catch (error: any) {
      throw new CustomError(400, "Descrever erro");
    }
  };
  
  public getMyProfile = async (input: idUserInputDTO, token: string) => {
    try {
      let {id} = input

      if (!id || !token) {
        throw new MissingParameters();
      }

      const result = await this.UserDB.getMyProfile(id)
      if(!result) {
        throw new NotFound();
      }

      const tokenData = Authenticator.getTokenData(token)
      if(tokenData.id !== result.id) {
        throw new NotAuthorized();
      }

      const user = {
        id: result.id,
        name: result.name,
        email: result.email
      }

      return user

    } catch (error: any) {
      throw new CustomError(400, "Descrever erro");
    }
  };

  public getOtherProfile = async (input: idUserInputDTO, token: string) => {
    try {
      let {id} = input

      if (!id || !token) {
        throw new MissingParameters();
      }

      const result = await this.UserDB.getOtherProfile(id)
      if(!result) {
        throw new NotFound();
      }

      const user = {
        id: result.id,
        name: result.name,
        email: result.email
      }

      return user

    } catch (error: any) {
      throw new CustomError(400, "Descrever erro");
    }
  };

}

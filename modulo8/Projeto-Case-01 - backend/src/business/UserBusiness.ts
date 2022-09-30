import { 
    CustomError, 
    InvalidCredentials, 
    InvalidEmail, 
    InvalidPassword, 
    MissingParameters, 
    RegisteredUser, 
    Unauthorized, 
    UserNotFound 
} from "../error/CustomError";
import { User } from "../model/User";
import { HashGenerator} from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { UserRepository } from "./UserRepository";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
   constructor(
      private userDatabase: UserRepository,
      private hashGenerator: HashGenerator,
      private idGenerator: IdGenerator,
      private tokenGenerator: TokenGenerator
   ){}

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password) {
            throw new MissingParameters();
         }

         const checkEmail = (email: string) => {
            let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            return regex.test(email);
         };

         if (!checkEmail(email)) {
            throw new InvalidEmail();
         }

         const userExist = await this.userDatabase.getUserByEmail(email)

         if (userExist) {
           throw new RegisteredUser()
         }

         if (password.length < 6) {
            throw new InvalidPassword();
         }

         if(role !== "NORMAL" && role !== "ADMIN"){
            role = "NORMAL"
         }

         const id = this.idGenerator.generate();

         const cypherPassword = await this.hashGenerator.hash(password);

         await this.userDatabase.createUser(
            new User(id, name, email, cypherPassword, User.stringToUserRole(role))
         );

         const accessToken = this.tokenGenerator.generate({
            id,
            role,
         });

         return { accessToken };

      } catch (error:any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async login(email: string, password: string) {
      try {
         if (!email || !password) {
            throw new MissingParameters();
         }

         const user = await this.userDatabase.getUserByEmail(email);

         if (!user) {
            throw new InvalidCredentials();
         }

         const isPasswordCorrect = await this.hashGenerator.compareHash(
            password,
            user.getPassword()
         );

         if (!isPasswordCorrect) {
            throw new InvalidCredentials();
         }

         const accessToken = this.tokenGenerator.generate({
            id: user.getId(),
            role: user.getRole(),
         });

         return { accessToken };
      } catch (error:any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public getUserById = async (id: string, token: string): Promise<User> => {
      try {
        const tokenData = this.tokenGenerator.verify(token)
  
        if (!id || !token) {
          throw new MissingParameters()
        };
  
        if (!tokenData) {
          throw new Unauthorized()
        }
  
        const user = await this.userDatabase.getUserById(id)
  
        if (!user) {
          throw new UserNotFound()
        }
  
        return user;
      } catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
      };
    }; 
    
    async getUserByEmail(email: string, token: string) {
        try {
            if (!email || !token) {
                throw new MissingParameters()
            };

            const tokenData = this.tokenGenerator.verify(token)

            if (!tokenData) {
                throw new Unauthorized()
            }

            const user = await this.userDatabase.getUserByEmail(email);

            if (!user) {
                throw new UserNotFound()
            }

            return user;
        }   catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        };
    }
}

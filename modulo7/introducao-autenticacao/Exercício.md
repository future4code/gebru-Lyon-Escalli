  Exercício 1

 A) Acho melhor, pois devido ao seu tamanho de diversidade de letras para formar o ID único é melhor trabalhar com strings, que permite utilizar diversos caracteres diferentes.

 B) import { v4 } from "uuid"

 export class generateId {
   generateId = () => {
       return v4()
    }
 }

Exercício 2

 A) Garante que o valor receido é realmente uma string; é preciso pois o método sign aceita como chave secreta apenas o formato string.

 B) export type AuthenticationData = {
    id: string
 }

 export class Authenticator {
    generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_DURATION}
        )
        return token
    }

 }

Exercício 3

app.post('/user/signup', userController.create)

const auth = new Authenticator();

public create = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || email.indexOf("@") === -1){
          throw new Error("Invalid email");
        }

        if (!password || password.length < 6) {
          throw new Error("Invalid password");
        }

        const id = generateId();

        await UserDatabase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password
        })
        .into("Auth_users");
    
        const token = auth.generateToken({
          id,
        });

    res.status(200).send({token});
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};    

Exercício 4

const getUserByEmail = async(email: string): Promise<any> => {
   const result = await UserDatabase.connection
     .select("*")
     .from(Auth_users)
     .where({ email });

   return result[0];
  }
}

Exercício 5

app.post('/user/login', userController.login)

const auth = new Authenticator();

public login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || email.indexOf("@") === -1){
          throw new Error("Invalid email");
        }

        const user = await getUserByEmail(email);

        if (user.password !== password) {
          throw new Error("Invalid password");
        }
    
        const token = auth.generateToken({
          id: user.id;
        });

    res.status(200).send({token});
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};  

Exercício 6

A)Ela recebe qualquer tipo de dado; permite receber qualquer tipo de dado para realizar a validação.

B) import * as jwt from "jsonwebtoken";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

Exercício 7

A)

public async getUserById(id: string): Promise<any> {
    const result = await UserDatabase.connection
      .select("*")
      .from("Auth_users")
      .where({ id });

    return result[0];
  }
}

B)

app.get('/user/profile', userController.logedIn)

public logedIn = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getData(token);

        const user = await getUserById(authenticationData.id);

        res.status(200).send({
          id: user.id,
          email: user.email,
        });
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};  

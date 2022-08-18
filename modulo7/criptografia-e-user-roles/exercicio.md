EXERCÍCIO 01

A)
round = Também conhecido como "cost", ele ajuda a deixar a senha mais segura, quanto maior, mais segura ela é, mas também quanto maior mais demorado para executar. O recomendado é usar 12, pois executa em alguns milisegundos.

salt = é uma string aleatória acrescida para deixar a criptografia mais complexa e a senha mais segura, evitando ataques cibernéticos.

B)
import * as bcrypt from "bcryptjs";

 const hash = async(str: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(str, salt);
    return result;
  }

C)

const compare = async(str: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(str, hash);
  }


EXERCÍCIO 02

A) O cadastro, para que possa ser gerada o hash criptografado, depois é possivel realizar o teste de login com a senha informada e o código criptografado salvo pelo banco.

B)

app.post('/user/signup', userController.create)

const auth = new Authenticator();

public create = async (req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const id = generateId();
        const hashPassword = await hash(userData.password);

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

C)

app.post('/user/login', userController.login)

const auth = new Authenticator();

public login = async (req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        if (!userData.email || userData.email.indexOf("@") === -1){
          throw new Error("Invalid email");
        }

        const user = await getUserByEmail(userData.email);

        const compareResult = await compare(
            userData.password,
           user.password
        );

    if (!compareResult) {
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

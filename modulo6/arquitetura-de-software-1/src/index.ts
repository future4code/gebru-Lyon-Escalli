// import { app } from "./app";
// import { createUser, getAllUsers, deleteUser } from "./endpoints/endpoints";

// app.post("/createUser", createUser);
// app.get("/all", getAllUsers);
// app.delete("/:id", deleteUser);

/*
export const createUser = async(req: Request,res: Response): Promise<void> =>{

   try {
      
       const {name, email, password} = req.body;

       if(!name || !email || !password) {
           throw new Error(erros.MISSING_PARAMETERS.message)
       }

       const newUser: user = {
           id: uuidv4(),
           name,
           email,
           password
       }

       await connection('labecommerce_users').insert(newUser);

       res.status(201).send("Usuário criado com sucesso!")


   } catch (error) {
       showErrors(res, error);
   }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {

        const users = await connection('labecommerce_users').select();

        if(users.length < 1) {
            throw new Error(erros.NOT_FOUND.message)
        }

        res.status(200).send(users)

    } catch (error) {
        showErrors(res, error);
    }
};

*********************verificar exemplo função delete no shopper************

export const deleteUser = async (req: Request, res: Response) => {
    try {

      const {id} = req.params;

       if(!id) {
           throw new Error(erros.MISSING_PARAMETERS.message)
       }

        const users = await connection('labecommerce_users').where().delete();

        const resposta: {} = { "message": "Usuário apagado com sucesso!" }

        res.status(200).send(resposta.message)

    } catch (error) {
        showErrors(res, error);
    }
};


*/
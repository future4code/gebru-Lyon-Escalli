import { Request, Response } from 'express';
import { app } from "./app";
import { data } from "./data";
import { v4 as uuidv4 } from 'uuid';

const erros: {[key: string]: {status: number, message: string}} = {
    UNDER_AGE: {status: 422, message: "A idade do usuário não pode ser inferior a 18 anos; consultar documentação."},
    CPF_EXISTS: {status: 409, message: "Cliente já cadastrado na base de dados."},
    MISSING_PARAMETERS: {status: 422, message: "Informações faltando; verificar documentação."},
    USER_NOT_FOUND: {status: 404, message: "Cliente não encontrado."},
    INSUFFICIENT_BALANCE: {status: 400, message: "Saldo insuficiente."},
    SOME_ERROR: {status: 500, message: "Algo deu errado."}
}

let users: Array<client> = data;

type client = {
    id: string,
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    extract: Array<transation>
}

type transation = {
    id: string,
    value: number,
    date: string,
    description: string
}

app.get("/getAllClients", (req: Request, res: Response) => {          
    try {
        res.status(200).send(users);
    }
    catch (error: any) {
        res.end(error.message);
    }
})

app.post("/createAccount", (req: Request, res: Response) => {          
    try {

        const {name, cpf, birthDate} = req.body;
        const ageArr = JSON.parse("[" + birthDate.replaceAll("-", ",") + "]");
        const age = 2022 - ageArr[2];

        if(age < 18) {
            throw new Error(erros.UNDER_AGE.message)
        }

        for (let element of users) {
            if (element.cpf === cpf) {
                throw new Error(erros.CPF_EXISTS.message)
            }
        }

        const newClient = {
            id: uuidv4(),
            name,
            cpf,
            birthDate,
            balance: 0,
            extract: []
        }

        users.push(newClient)

        res.status(201).send(users);

    }
    catch (error: any) {
        switch (error.message) {
            case erros.UNDER_AGE.message:
                res.status(erros.UNDER_AGE.status).send(erros.UNDER_AGE.message)
                break;
            case erros.CPF_EXISTS.message:
                res.status(erros.CPF_EXISTS.status).send(erros.CPF_EXISTS.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
})

app.get("/getBalance/:nameUser/:cpfUser", (req: Request, res: Response) => {          
    try {

        const {name, cpf} = req.params;

        if(!name || !cpf) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        for (let element of users) {
            if (element.cpf !== cpf && element.name !== name) {
                throw new Error(erros.USER_NOT_FOUND.message)
            } else {
                res.status(200).send(element.balance);
            }
        }
        
    }
    catch(error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.USER_NOT_FOUND.message:
                res.status(erros.USER_NOT_FOUND.status).send(erros.USER_NOT_FOUND.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
})

app.put("/addBalance/:idUser/:cpfUser", (req: Request, res: Response) => {          
    try {

        const {name, cpf} = req.params;
        const value = req.body;

        if(!name || !cpf) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        for (let element of users) {
            if (element.cpf !== cpf && element.name !== name) {
                throw new Error(erros.USER_NOT_FOUND.message)
            } else {
                const newValue = element.balance + value;
                element.balance = newValue

                const newTransation = {
                    id: uuidv4(),
                    value: value,
                    date: "01-01-2022",
                    description: "Depósito de dinheiro"
                }

                element.extract.push(newTransation)

                res.status(200).send(element);
            }
        }

    }
    catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.USER_NOT_FOUND.message:
                res.status(erros.USER_NOT_FOUND.status).send(erros.USER_NOT_FOUND.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
})

app.put("/payBill/:idUser/:cpfUser", (req: Request, res: Response) => {          
    try {
        const {name, cpf} = req.params;
        const {description, value} = req.body;

        if(!name || !cpf) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        if(!description || !value) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        for (let element of users) {
            if (element.cpf !== cpf && element.name !== name) {
                throw new Error(erros.USER_NOT_FOUND.message)
            } else {
                if (element.balance < value) {
                    throw new Error(erros.INSUFFICIENT_BALANCE.message)
                } else {
                    const newValue = element.balance - value;
                    element.balance = newValue

                    const newTransation = {
                        id: uuidv4(),
                        value,
                        date: "01-01-2022",
                        description
                    }
    
                    element.extract.push(newTransation)
    
                    res.status(200).send(element);
                }
            }
        }
    }
    catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.USER_NOT_FOUND.message:
                res.status(erros.USER_NOT_FOUND.status).send(erros.USER_NOT_FOUND.message)
                break;
            case erros.INSUFFICIENT_BALANCE.message:
                res.status(erros.INSUFFICIENT_BALANCE.status).send(erros.INSUFFICIENT_BALANCE.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
})

app.put("/transferBalance/:idUser/:cpfUser", (req: Request, res: Response) => {          
    try {

        const {name, cpf} = req.params;
        const {sendName, sendCpf, value} = req.body;

        if(!name || !cpf) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        if(!sendName || !sendCpf || !value) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        for (let element of users) {
            if (element.cpf !== cpf && element.name !== name) {
                throw new Error(erros.USER_NOT_FOUND.message)
            } else {
                if (element.balance < value) {
                    throw new Error(erros.INSUFFICIENT_BALANCE.message)
                } else {
                    const newValue = element.balance - value;
                    element.balance = newValue

                    const newTransation = {
                        id: uuidv4(),
                        value,
                        date: "01-01-2022",
                        description: "Transferência"
                    }
    
                    element.extract.push(newTransation)

                    for (let element of users) {
                        if (element.cpf !== sendCpf && element.name !== sendName) {
                            throw new Error(erros.USER_NOT_FOUND.message)
                        } else {
                            const newValue = element.balance + value;
                            element.balance = newValue
                        }
                    }

                    res.status(200).send(element);
                }
            }
        }
    }
    catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.USER_NOT_FOUND.message:
                res.status(erros.USER_NOT_FOUND.status).send(erros.USER_NOT_FOUND.message)
                break;
            case erros.INSUFFICIENT_BALANCE.message:
                res.status(erros.INSUFFICIENT_BALANCE.status).send(erros.INSUFFICIENT_BALANCE.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
})
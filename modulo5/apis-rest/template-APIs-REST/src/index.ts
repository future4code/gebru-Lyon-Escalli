import { Request, Response } from 'express';
import { app } from "./app";

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

export enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}


let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

let usuarios: Array<user> = users;

//EXERCÍCIO 01

// a) Método GET
// b) /getAllUsers

app.get("/getAllUsers", (req: Request, res: Response) => {          
    try {
        res.status(200).send(usuarios);
    }
    catch (error: any) {
        res.end(error.message);
    }
})

//EXERCÍCIO 02

// a) Parametro Query, por ser uma informação de texto simples e crítica (Usuário é admin ou não).


app.get("/getUsersByType", (req: Request, res: Response) => {          
    try {
    
        const {type} = req.query;
        let newArray = [];

        for (let element of users) {
            if (element.type === type) {
                newArray.push(element)
            }
        }
        res.status(200).send(newArray)
    }
    catch (error: any) {
        res.end(error.message);
    }
})


//EXERCÍCIO 03

// a) Parametro Query

app.get("/getUserByName", (req: Request, res: Response) => {          
    try {

        const {name} = req.query;

        for (let element of users) {
            if (element.name === name) {
                res.status(200).send(element);
            }
        }
    }
    catch (error: any) {
        res.end(error.message);
    }
})

//EXERCÍCIO 04

// a) Ele acusa erro 404 - não encontrado

// b) Não, pois o PUT edita um registro já existente, este exercício pede a criação de um novo registro.


app.post("/createUser", (req: Request, res: Response) => {          
    try {

        const {id, name, email, type, age} = req.body;

        const newUser = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)

        res.status(201).send(users);

    }
    catch (error: any) {
        res.end(error.message);
    }
})
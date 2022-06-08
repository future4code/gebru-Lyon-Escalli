import { Request, Response } from 'express';
import { app } from "./app";
import { data } from "./data";
import { v4 as uuidv4 } from 'uuid';

app.get("/test", (req: Request, res: Response) => {          
    res.send("API funcional!")
})

const erros: {[key: string]: {status: number, message: string}} = {
    MISSING_PARAMETERS: {status: 422, message: "Informações faltando; verificar documentação."},
    NOT_STRING: {status: 400, message: "Verificar o tipo de variável; não é uma string."},
    NOT_NUMBER: {status: 400, message: "Verificar o tipo de variável; não é um número."},
    NEGATIVE_PRICE: {status: 422, message: "A variável preço não pode ser igual ou menor que zero; consulte a documentação."},
    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Verificar o envio da autorization."},
    SOME_ERROR: {status: 500, message: "Algo deu errado."}
}

type product = {
    id: string,
    name: string,
    price: number
}

let produtos: Array<product> = data;

app.post("/test/create", (req: Request, res: Response) => {
    try {

        const {name, price} = req.body;

        if(!name || !price) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        if (typeof(name) !== "string") {
            throw new Error(erros.NOT_STRING.message)
        }

        if (typeof(price) !== "number") {
            throw new Error(erros.NOT_NUMBER.message)
        }

        const newProduct = {
            id: uuidv4(),
            name,
            price,
        }

        produtos.push(newProduct)

        res.status(201).send(produtos);

    }
    catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.NOT_STRING.message:
                res.status(erros.NOT_STRING.status).send(erros.NOT_STRING.message)
                break;
            case erros.NOT_NUMBER.message:
                res.status(erros.NOT_NUMBER.status).send(erros.NOT_NUMBER.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
});

app.get("/test/getAllProducts", (req: Request, res: Response) => {          
    try {
        res.status(200).send(produtos);
    }
    catch (error: any) {
        res.end(error.message);
    }
})

app.put("/test/alter", (req: Request, res: Response) => {
    try {
        const id = req.query.id;
        const newPrice = req.body;

        if (!id || !newPrice) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        if (typeof(newPrice) !== "number") {
            throw new Error(erros.NOT_NUMBER.message)
        }

        if (newPrice <= 0) {
            throw new Error(erros.NEGATIVE_PRICE.message)
        }

        let alteredProduto;

        for (let element of produtos) {
            if (element.id === id) {
                element.price = newPrice;
                alteredProduto = element
            }
        }

        res.status(200).send(alteredProduto)
    }
    catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.NEGATIVE_PRICE.message:
                res.status(erros.NEGATIVE_PRICE.status).send(erros.NEGATIVE_PRICE.message)
                break;
            case erros.NOT_NUMBER.message:
                res.status(erros.NOT_NUMBER.status).send(erros.NOT_NUMBER.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
});

app.delete("/test/delete", (req: Request, res: Response) => {
    try {
        const id = req.query.id;

        if (!id) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        let alteredProduto;

        for (let element of produtos) {
            if (element.id === id) {
                let index = produtos.findIndex((u) => u.id === id);
                if (index > -1) {
                    alteredProduto = produtos.splice(index,1)
                }
            }
        }

        res.status(200).send(produtos)
    }
    catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
});


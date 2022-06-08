import { Request, Response } from 'express';
import { app } from "./app";
import { data } from "./data";
import { v4 as uuidv4 } from 'uuid';

app.get("/test", (req: Request, res: Response) => {          
    res.send("API funcional!")
})

type product = {
    id: string,
    name: string,
    price: number
}

let produtos: Array<product> = data;

app.post("/test/create", (req: Request, res: Response) => {
    try {

        const {name, price} = req.body;

        const newProduct = {
            id: uuidv4(),
            name,
            price,
        }

        produtos.push(newProduct)

        res.status(201).send(produtos);

    }
    catch (error: any) {
        res.end(error.message);
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
        res.end(error.message);
    }
});

app.delete("/test/delete", (req: Request, res: Response) => {
    try {
        const id = req.query.id;

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
        res.end(error.message);
    }
});


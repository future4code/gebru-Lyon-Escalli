import { Request, Response } from "express"
import { connection } from "../data/connection"
import { v4 as uuidv4 } from 'uuid';

const erros: {[key: string]: {status: number, message: string}} = {
    MISSING_PARAMETERS: {status: 422, message: "Informações faltando; verificar documentação."},
    NOT_FOUND: {status: 404, message: "Nenhum dado encontrado."},
    SOME_ERROR: {status: 500, message: "Algo deu errado."}
};

export const createUser = async(req: Request,res: Response): Promise<void> =>{

    try {
       
        const {name, email, password} = req.body;

        if(!name || !email || !password) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        await connection('labecommerce_users').insert({
            id: uuidv4(),
            name,
            email,
            password
        });

        res.status(201).send("Usuário criado com sucesso!")

 
    } catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        };
    }
};

 export const getAllUsers = async (req: Request, res: Response) => {
    try {

        const users = await connection('labecommerce_users').select();

        if(users.length < 1) {
            throw new Error(erros.NOT_FOUND.message)
        }

        res.status(200).send(users)

    } catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.NOT_FOUND.message:
                res.status(erros.NOT_FOUND.status).send(erros.NOT_FOUND.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        };
    }
};

export const createProduct = async(req: Request,res: Response): Promise<void> =>{

    try {
       
        const {name, price, image_url} = req.body;

        if(!name || !price || !image_url) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        await connection('labecommerce_products').insert({
            id: uuidv4(),
            name,
            price,
            image_url
        });

        res.status(201).send("Produto criado com sucesso!")

    } catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        };
    }
 }

export const getAllProducts = async (req: Request, res: Response) => {
    try {

        let search = req.query.search as string
        let order = req.query.order as string

        if(!search) {
            search = "%"
        }

        if(order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC"){
           order = "%"
        }

        const products = await connection('labecommerce_products')
        .orderBy(search, order)
        .select();

        if(products.length < 1) {
            throw new Error(erros.NOT_FOUND.message)
        }

        res.status(200).send(products)

    } catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.NOT_FOUND.message:
                res.status(erros.NOT_FOUND.status).send(erros.NOT_FOUND.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        };
    }
};

export const createPurchaseRegister = async(req: Request,res: Response): Promise<void> =>{

    try {
       
        const {user_id, product_id, price, quantity} = req.body;

        if(!user_id || !product_id || !price || !quantity) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        const totalPrice: number = price * quantity

        await connection('labecommerce_purchases').insert({
            id: uuidv4(),
            user_id,
            product_id,
            quantity,
            total_price: totalPrice
        });

        res.status(201).send("Compra registrada com sucesso!")

 
    } catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        };
    }
};

export const getUserPurchase = async (req: Request, res: Response) => {
    try {

        const user_id = req.params.user_id;

        if(!user_id) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }
        
        const purchase = await connection('labecommerce_purchases')
        .where('user_id', '=', user_id)
        .select();

        if(purchase.length < 1) {
            throw new Error(erros.NOT_FOUND.message)
        }

        res.status(200).send(purchase)

    } catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            case erros.NOT_FOUND.message:
                res.status(erros.NOT_FOUND.status).send(erros.NOT_FOUND.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        };
    }
};


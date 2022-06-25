import { Request, Response } from 'express';
import connection from '../connection';
import { v4 as uuidv4 } from 'uuid';

const erros: {[key: string]: {status: number, message: string}} = {
    MISSING_PARAMETERS: {status: 422, message: "Informações faltando; verificar documentação."},
    NOT_FOUND: {status: 404, message: "Não foram encontradas tarefas para este usuário."},
    SOME_ERROR: {status: 500, message: "Algo deu errado."}
};

export const readUser = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        if(!id) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }
        
        const user = await connection('todolistUsers').where('id', '=', id).select('id', 'name');

        res.status(200).send(user)

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

export const createUser = async (req: Request, res: Response) => {
    try {
        
        const {name, nickname, email} = req.body;

        if(!name || !nickname || !email) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }
        
        await connection('todolistUsers').insert({
            id:  uuidv4(),
            name,
            nickname,
            email
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
        }
    }
};

export const editUser = async (req: Request, res: Response) => {
    try {
        
        const { id } = req.params;
        const { name, nickname } = req.body;

        if(!id || !name || !nickname) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }
            const user = await connection('todolistUsers').where('id', '=', id).update('name', name, 'nickname', nickname).select('name', 'nickname');
            res.status(200).send(user)

    } catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
};

export const readTask = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        if(!id) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }
        
        const task = await connection('userTask').where('creatorUserId', '=', id).select();

        if(!task) {
            throw new Error(erros.NOT_FOUND.message)
        }

        res.status(200).send(task)

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

export const createTask = async (req: Request, res: Response) => {
    try {
        
        const {title, description, date, creatorUserId} = req.body;

        if(!title || !description || !date || !creatorUserId) {
            throw new Error(erros.MISSING_PARAMETERS.message)
        }

        const newDate = date.split('/').reverse().join('-');
        
        await connection('userTask').insert({
            taskId:  uuidv4(),
            title,
            description,
            limitDate: newDate,
            creatorUserId
        });

        res.status(201).send("Nova tarefa criada com sucesso!")

    } catch (error: any) {
        switch (error.message) {
            case erros.MISSING_PARAMETERS.message:
                res.status(erros.MISSING_PARAMETERS.status).send(erros.MISSING_PARAMETERS.message)
                break;
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
                break;
        }
    }
};
import { Request, Response } from 'express';
import { app } from "./app";
import { dataTarefas } from "./dataTarefas";

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong!")
})

type tarefas = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

let userTarefas: Array<tarefas> = dataTarefas;

app.get("/todo/completed", (req: Request, res: Response) => {
    try {

        const user = userTarefas.filter((u) => u.completed === true);

        if(!user) throw new Error('Nenhuma tarefa concluída');

        res.send(user).end();
    }
    catch (error: any) {
        res.end(error.message);
    }
});

app.post("/todo/create", (req: Request, res: Response) => {
    try {
        /*
        const userName = req.headers.authorization;
        const user = userTarefas.find((u) => user.userId === userName);
        */

        const {userId, id, title, completed} = req.body;

        const newTarefa = {
            userId,
            id,
            title,
            completed
        }

        userTarefas.push(newTarefa)

        res.status(201).send(userTarefas);

    }
    catch (error: any) {
        res.end(error.message);
    }
});

app.put("/todo/alter", (req: Request, res: Response) => {
    try {
        const idUser = Number(req.query.iduser);
        const idTodo = Number(req.query.idtodo);

        let alteredTarefa;

        for (let element of userTarefas) {
            if (element.userId === idUser && element.id === idTodo) {
                element.completed = !element.completed
                alteredTarefa = element
            }
        }
    
        res.status(200).send(alteredTarefa)
    }
    catch (error: any) {
        res.end(error.message);
    }
});


app.delete("/todo/delete", (req: Request, res: Response) => {
    try {
        const idUser = Number(req.query.iduser);
        const idTodo = Number(req.query.idtodo);

        let alteredTarefa;

        for (let element of userTarefas) {
            if (element.userId === idUser && element.id === idTodo) {
                let index = userTarefas.findIndex((u) => u.userId === idUser && u.id === idTodo);
                if (index > -1) {
                    alteredTarefa = userTarefas.splice(index,1)
                }
            }
        }
    
        res.status(200).send(userTarefas)
    }
    catch (error: any) {
        res.end(error.message);
    }
});

app.get("/todo/search/:id", (req: Request, res: Response) => {
    try {
        const idUser = Number(req.params.id);

        const user = userTarefas.filter((u) => u.userId === idUser);

        if(!user) throw new Error('Nenhum usuário encontrado.');

        res.send(user).end();
    }
    catch (error: any) {
        res.end(error.message);
    }
});

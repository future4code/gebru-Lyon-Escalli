import { Router } from 'express';
import { readUser, createUser, editUser, readTask, createTask } from '../Controllers/user';

export const router = Router();

//Rotas para user
router.get('/user/:id', readUser);
router.post('/user', createUser);
router.put('/user/edit/:id', editUser);

//Rotas para tarefas
router.get('/task/:id', readTask);
router.post('/task', createTask);
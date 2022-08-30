import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userControl = new UserController()

userRouter.post('/signup', userControl.signup)
userRouter.post('/login', userControl.login)
userRouter.get('/profile', userControl.getMyProfile)
userRouter.get('/:id', userControl.getOtherProfile)

/*
ENDPOINTS
Todos os endpoints, com exceção do Signup e Login, 
devem exigir autenticação.
*/
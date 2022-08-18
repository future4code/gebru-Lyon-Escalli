import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/users", userController.create)
userRouter.post("/friendship/:id", userController.makeFriendship)
userRouter.delete("/endfriendship/:id", userController.endFriendship)